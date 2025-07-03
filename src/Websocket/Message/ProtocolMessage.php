<?php

namespace Blomstra\Realtime\Websocket\Message;

use Illuminate\Support\Str;
use Ratchet\ConnectionInterface;
use stdClass;

class ProtocolMessage extends Message
{
    public function respond()
    {
        $eventName = Str::camel(Str::after($this->payload->event, ':'));

        if (method_exists($this, $eventName) && $eventName !== 'respond') {
            call_user_func([$this, $eventName], $this->connection, $this->payload->data ?? new stdClass());
        }
    }

    protected function ping(ConnectionInterface $connection)
    {
        $this->manager
            ->connectionPonged($connection)
            ->then(function () use ($connection) {

                $connection->send(json_encode(['event' => 'pusher:pong']));
            });
    }

    protected function subscribe(ConnectionInterface $connection, stdClass $payload)
    {
        $this->manager->subscribeToChannel($connection, $payload->channel, $payload);
    }

    protected function unsubscribe(ConnectionInterface $connection, stdClass $payload)
    {
        $this->manager->unsubscribeFromChannel($connection, $payload->channel, $payload);
    }
}
