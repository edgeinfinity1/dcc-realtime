<?php

namespace Blomstra\Realtime\Websocket\Console;

use Blomstra\Realtime\Websocket\Server\HttpServer;
use Blomstra\Realtime\Websocket\Logger\ConnectionLogger;
use Blomstra\Realtime\Websocket\Logger\HttpLogger;
use Blomstra\Realtime\Websocket\Logger\WebsocketLogger;
use Blomstra\Realtime\Websocket\Settings;
use Illuminate\Console\Command;
use Illuminate\Contracts\Cache\Repository;
use Illuminate\Database\ConnectionInterface;
use Ratchet\Http\Router;
use Ratchet\Server\IoServer;
use React\EventLoop\Factory as Loop;
use React\EventLoop\LoopInterface;
use React\EventLoop\TimerInterface;
use React\Socket\Server;
use Symfony\Component\Routing\Matcher\UrlMatcher;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\RouteCollection;

class ServeCommand extends Command
{
    protected $signature = 'realtime:serve
        {--ignore-extension-toggles : Ignore killing the daemon when extensions are en- or disabled}
        {--debug : Allow debugging of all connections}';
    protected $description = 'Starts the realtime websocket server using the configured settings. (daemonize this)';

    public function handle(Settings $settings, Repository $cache)
    {
        $this->loggers();

        $loop = Loop::create();

        $this->restartOnCachedSignal($loop, $cache);
        $this->restartOnExtensionChanges($loop);

        $this->getLaravel()->instance(LoopInterface::class, $loop);

        // Catch everything, including notices when we run the php serve command
        // with --debug.
        set_error_handler(
            [$this, 'errorHandler'],
            $this->option('debug') ? E_ALL: E_ALL & ~E_NOTICE & ~E_STRICT & ~E_DEPRECATED
        );

        $socket = new Server($listensOn = "$settings->serverHost:$settings->serverPort", $loop);

        $routes = tap(new RouteCollection, function ($router) {
            $routes = include __DIR__ . '/../../../resources/routes/websocket.php';

            $routes($router);
        });

        $app = new Router(
            new UrlMatcher($routes, new RequestContext)
        );

        $maxRequestSize = \getenv('WSS_MAX_REQUEST_SIZE_KB') ?: 256;

        $http = new HttpServer(
            $app,
                $maxRequestSize * 1024
        );

        if (HttpLogger::isEnabled()) {
            $http = HttpLogger::decorate($http);
        }

        $io = new IoServer($http, $socket, $loop);

        $this->info("Starting websocket server, which listens on $listensOn.");
        $this->info("App key expected is $settings->appKey");
        $this->info("App secret expected is $settings->appSecret");
        $this->info("Max connections $settings->maxConnections");

        $io->run();
    }

    protected function loggers()
    {
        $debug = $this->option('debug');

        $this->getLaravel()->singleton(HttpLogger::class, function () use ($debug) {
            return (new HttpLogger($this->output))
                ->enable($debug)
                ->verbose($this->output->isVerbose());
        });

        $this->getLaravel()->singleton(WebsocketLogger::class, function () use ($debug) {
            return (new WebsocketLogger($this->output))
                ->enable($debug)
                ->verbose($this->output->isVerbose());
        });

        $this->getLaravel()->bind(ConnectionLogger::class, function () use ($debug) {
            return (new ConnectionLogger($this->output))
                ->enable($debug)
                ->verbose($this->output->isVerbose());
        });
    }

    public function errorHandler($errno, $errstr, $errfile, $errline)
    {
        throw new \Exception("$errno, $errstr, $errfile:$errline");
    }

    protected function restartOnCachedSignal(LoopInterface $loop, Repository $cache): void
    {
        $loop->addPeriodicTimer(10, function (TimerInterface $timer) use ($loop, $cache) {
            if ($cache->has($key = HaltCommand::KEY)) {
                $this->warn("Halt signal received, killing to restart.");

                $cache->forget($key);

                $loop->stop();
            }
        });
    }

    protected function restartOnExtensionChanges(LoopInterface $loop): void
    {
        $enabled = null;

        $loop->addPeriodicTimer(10, function (TimerInterface $timer) use ($loop, &$enabled) {
            /** @var ConnectionInterface $connection */
            $connection = $this->getLaravel()->make(ConnectionInterface::class);

            $newState = $connection->table('settings')
                ->where('key', 'extensions_enabled')
                ->value('value');

            if ($enabled === null || $newState === $enabled) {
                $enabled = $newState;

                return;
            }

            if ($this->option('ignore-extension-toggles')) {
                $enabled = $newState;

                $this->warn("One or more extensions have changed, but ignoring due to flag --ignore-extension-toggles.");

                return;
            }

            $this->warn("One or more extensions have changed, killing to restart.");

            $loop->stop();
        });
    }
}
