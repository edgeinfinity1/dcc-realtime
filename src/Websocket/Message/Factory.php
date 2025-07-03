<?php

namespace Blomstra\Realtime\Websocket\Message;

use Blomstra\Realtime\Websocket\Channel\Manager;
use Illuminate\Support\Str;
use Ratchet\ConnectionInterface;
use Ratchet\RFC6455\Messaging\MessageInterface;

class Factory
{
    public static function forMessage(
        MessageInterface $message,
        ConnectionInterface $connection,
        Manager $manager
    ): Message
    {
        $payload = json_decode($message->getPayload());

        return Str::startsWith($payload->event, 'pusher:')
            ? new ProtocolMessage($payload, $connection, $manager)
            : new Message($payload, $connection, $manager);
    }
}
