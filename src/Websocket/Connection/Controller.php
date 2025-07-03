<?php

namespace Blomstra\Realtime\Websocket\Connection;

use Blomstra\Realtime\Websocket\Channel\Manager;
use Blomstra\Realtime\Websocket\Concerns\Settings;
use Blomstra\Realtime\Websocket\Settings as SocketSettings;
use Exception;
use GuzzleHttp\Psr7\Message;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Laminas\Diactoros\Response;
use Laminas\Diactoros\Response\JsonResponse;
use Laminas\Diactoros\ServerRequest;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ServerRequestInterface;
use Pusher\Pusher;
use Ratchet\ConnectionInterface;
use Ratchet\Http\HttpServerInterface;

abstract class Controller implements HttpServerInterface
{
    use Settings;

    protected Manager $manager;
    protected RequestInterface $request;
    protected int $contentLength = 0;
    protected string $buffer = '';
    protected Pusher $pusher;

    public function __construct(Manager $manager, Pusher $pusher)
    {
        $this->manager = $manager;
        $this->pusher = $pusher;
    }

    public function onOpen(ConnectionInterface $conn, RequestInterface $request = null)
    {
        $this->request = $request;
        $this->buffer = $request->getBody()->getContents();
        $this->contentLength = $this->contentLength($request->getHeaders());

        if (! $this->verifyContentLength()) {
            return;
        }

        $this->handleRequest($conn);
    }

    public function onMessage(ConnectionInterface $from, $msg)
    {
        $this->buffer .= $msg;

        if (! $this->verifyContentLength()) {
            return;
        }

        $this->handleRequest($from);
    }

    public function onClose(ConnectionInterface $connection)
    {
        //
    }

    public function onError(ConnectionInterface $connection, Exception $exception)
    {
        $response = new JsonResponse([
            'error' => $exception->getMessage()
        ], 400);

        tap($connection)->send(Message::toString($response))->close();
    }

    protected function handleRequest(ConnectionInterface $conn)
    {
        $query = [];
        parse_str($this->request->getUri()->getQuery(), $query);

        $request = (new ServerRequest(
            [], [],
            $this->request->getUri(), $this->request->getMethod(),
            $this->request->getBody(),
            $this->request->getHeaders()
        ))
            ->withQueryParams($query)
            ->withParsedBody(json_decode($this->buffer, true))
            /** @phpstan-ignore-next-line */
            ->withAttribute('socket_id', $conn->socketId ?? null);

        $this->validateSignature($request);

        $response = $this($request);

        // Allow for async IO in the controller action
        $response = \React\Promise\resolve($response);

        $response->then(function ($response) use ($conn) {
            if ($response instanceof Exception) {
                $this->sendAndClose($conn, new JsonResponse(['error' => $response->getMessage(), 'trace' => $response->getTraceAsString()], 400));

                return;
            }

            $this->sendAndClose($conn, $response);
        });
    }


    abstract public function __invoke(ServerRequestInterface $request);

    protected function contentLength(array $headers): int
    {
        return collect($headers)->first(function ($values, $header) {
            return \strtolower($header) === 'content-length';
        })[0] ?? 0;
    }

    protected function verifyContentLength(): bool
    {
        return strlen($this->buffer) === $this->contentLength;
    }


    protected function validateSignature(ServerRequest $request)
    {
        $params = Arr::except($request->getQueryParams(), [
            'auth_signature', 'body_md5', 'appId', 'appKey', 'channelName',
        ]);

        if ($this->buffer !== '') {
            $params['body_md5'] = md5($this->buffer);
        }

        ksort($params);

        $signature = "{$request->getMethod()}\n{$request->getUri()->getPath()}\n".Pusher::array_implode('=', '&', $params);

        /** @var SocketSettings $settings */
        $settings = resolve(SocketSettings::class);

        $authSignature = hash_hmac('sha256', $signature, $settings->appSecret);

        if ($authSignature !== $request->getQueryParams()['auth_signature']) {
            throw new Exception('Invalid auth signature provided.');
        }
    }
    protected function sendAndClose(ConnectionInterface $conn, $response)
    {
        if ($response instanceof Collection) $response = new JsonResponse($response->toArray());
        if (is_array($response)) $response = new JsonResponse($response);
        if (!($response instanceof Response)) $response = new Response($response);

        $conn->send(Message::toString($response));
        $conn->close();
    }
}
