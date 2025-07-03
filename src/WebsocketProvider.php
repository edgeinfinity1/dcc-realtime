<?php


namespace Blomstra\Realtime;

use Blomstra\Realtime\Websocket\Channel\Manager;
use Blomstra\Realtime\Websocket\Settings;
use Flarum\Foundation\AbstractServiceProvider;
use Flarum\Foundation\Config;
use Illuminate\Contracts\Container\Container;
use Psr\Log\LoggerInterface;
use Pusher\Pusher;

class WebsocketProvider extends AbstractServiceProvider
{
    public function register()
    {
        $this->container->singleton(Manager::class);

        $this->container->singleton(Pusher::class, function (Container $container) {
            /** @var Settings $settings */
            $settings = $container->make(Settings::class);
            /** @var Config $config */
            $config = $container->make(Config::class);

            $pusher = new Pusher(
                $settings->appKey,
                $settings->appSecret,
                '1',
                [
                    'scheme' => $settings->phpClientSecure ? 'https' : 'http',
                    'host' => $settings->phpClientHost,
                    'port' => $settings->phpClientPort,
                    'debug' => $config->inDebugMode(),
                    'timeout' => $settings->phpClientTimeout
                ],
            );

            $pusher->setLogger($container->make(LoggerInterface::class));

            return $pusher;
        });
    }
}
