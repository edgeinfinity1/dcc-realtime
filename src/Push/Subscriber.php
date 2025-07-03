<?php

namespace Blomstra\Realtime\Push;

use Illuminate\Contracts\Events\Dispatcher;
use Illuminate\Contracts\Queue\Queue;

abstract class Subscriber
{
    public static array $disabledEvents = [];

    protected function eventDispatcher(): Dispatcher
    {
        return resolve(Dispatcher::class);
    }

    protected function queue(): Queue
    {
        return resolve(Queue::class);
    }

    /**
     * @param  \Closure|string|array  $events
     * @param  \Closure|string|array|null  $listener
     * @return void
     */
    protected function listen($events, $listener = null)
    {
        $this
            ->eventDispatcher()
            ->listen(
                array_diff((array) $events, static::$disabledEvents),
                $listener
            );
    }
}
