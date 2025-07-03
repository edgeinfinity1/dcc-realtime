<?php

namespace Blomstra\Realtime\Websocket\Console;

use Blomstra\Realtime\Push\Jobs\SendTriggerJob;
use Flarum\Discussion\Discussion;
use Flarum\User\User;
use Illuminate\Console\Command;
use Illuminate\Contracts\Queue\Queue;
use Illuminate\Support\Str;
use Pusher\Pusher;

class InfoCommand extends Command
{
    protected $signature = 'realtime:info';
    protected $description = 'Lists debugging information for your realtime server.';

    public function handle(Pusher $pusher, Queue $queue)
    {
        $this->info('Listing all active channels.');

        $userCount = 0;

        $this->table(['channel'], collect($pusher->getChannels()->channels)
            ->map(function ($_, $channel) use (&$userCount) {
                if (Str::startsWith($channel, 'private-user=')) $userCount++;

                return [$channel];
            })
            ->sort()
            ->toArray());

        $this->info("Logged in members connected: $userCount");

        $pusher->trigger('test', 'test', null);
        $this->info('Triggered a test event.');

        $promise = $pusher->triggerAsync('test', 'test', null);
        $promise->wait();
        $this->info('Triggered an async test event.');

        $queue->push(new SendTriggerJob('test', User::query()->oldest()->first()));
        $this->info('Triggered a test event dispatched to the queue.');
    }
}
