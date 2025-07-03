<?php


namespace Blomstra\Realtime\Websocket\Connection;

use Blomstra\Realtime\Websocket\Channel\Manager;
use Blomstra\Realtime\Websocket\Concerns\Promises;
use Blomstra\Realtime\Websocket\Exception\AppKeyNotAllowed;
use Blomstra\Realtime\Websocket\Exception\OriginNotAllowed;
use Blomstra\Realtime\Websocket\Exception\WebsocketException;
use Blomstra\Realtime\Websocket\Message\Factory;
use Blomstra\Realtime\Websocket\Server\QueryParams;
use Blomstra\Realtime\Websocket\Settings;
use Ratchet\ConnectionInterface;
use Ratchet\RFC6455\Messaging\MessageInterface;
use Ratchet\WebSocket\MessageComponentInterface;

class Websocket implements MessageComponentInterface
{
    use Promises;
    /**
     * @var Manager
     */
    private Manager $manager;

    public function __construct(Manager $manager)
    {
        $this->manager = $manager;
    }

    function onOpen(ConnectionInterface $conn)
    {
        /** @phpstan-ignore-next-line */
        $conn->socketId = $conn->socketId ?? null;

        if (! $this->manager->allowsNewConnection()) {
            return $conn->close();
        }

        $this
            ->verifyOrigin($conn)
            ->verifyAppKey($conn)
            ->generateSocketId($conn)
            ->establishConnection($conn);

        // Let's create a fulfilled promise
        $this->createFulfilledPromise(0);
    }

    function onClose(ConnectionInterface $conn)
    {
        $this->manager->unsubscribeFromAllChannels($conn);
    }

    function onError(ConnectionInterface $conn, \Exception $e)
    {
        if ($e instanceof WebsocketException) {
            $conn->send(json_encode($e->getPayload()));
        }
    }

    public function onMessage(ConnectionInterface $conn, MessageInterface $msg)
    {
        Factory::forMessage(
            $msg,
            $conn,
            $this->manager
        )->respond();
    }

    private function verifyOrigin(ConnectionInterface $conn): Websocket
    {
        /** @phpstan-ignore-next-line */
        $header = (string) ($conn->httpRequest->getHeader('Origin')[0] ?? null);

        $origin = parse_url($header, PHP_URL_HOST) ?: $header;

        if (! in_array($origin, $this->manager->getUrls())) {
            throw new OriginNotAllowed;
        }

        return $this;
    }

    protected function generateSocketId(ConnectionInterface $conn): Websocket
    {
        $socketId = sprintf('%d.%d', random_int(1, 1000000000), random_int(1, 1000000000));

        /** @phpstan-ignore-next-line */
        $conn->socketId = $socketId;

        return $this;
    }

    protected function establishConnection(ConnectionInterface $conn): Websocket
    {
        $conn->send(json_encode([
            'event' => 'pusher:connection_established',
            'data' => json_encode([
                /** @phpstan-ignore-next-line */
                'socket_id' => $conn->socketId,
                'activity_timeout' => 30,
            ]),
        ]));

        return $this;
    }

    protected function verifyAppKey(ConnectionInterface $conn)
    {
        /** @phpstan-ignore-next-line */
        $query = QueryParams::create($conn->httpRequest);

        $appKey = $query->get('appKey');

        /** @var Settings $settings */
        $settings = resolve(Settings::class);

        if ($appKey !== $settings->appKey) {
            throw new AppKeyNotAllowed($appKey);
        }

        return $this;
    }
}
