<?php

namespace Blomstra\Realtime\Push\Jobs;

use Flarum\Discussion\Discussion;
use Flarum\Queue\AbstractJob;
use Flarum\User\Guest;
use Flarum\User\User;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Pusher\Pusher;

abstract class Job extends AbstractJob
{
    public static ?string $onQueue = null;

    public function __construct()
    {
        if (static::$onQueue) $this->onQueue(static::$onQueue);
    }
    
    protected function pusher(): Pusher
    {
        return resolve(Pusher::class);
    }

    protected function visibleTo(Discussion $model, User $user = null): bool
    {
        return $model->query()
            ->where($model->getKeyName(), $model->getKey())
            ->whereVisibleTo($user ?? new Guest)
            ->exists();
    }

    /**
     * @param Discussion|null $visible
     * @return Collection|User[]
     * @throws \Pusher\PusherException
     */
    protected function connectedUsers(Discussion $visible = null): Collection
    {
        $response = $this->pusher()->getChannels([
            'filter_by_prefix' => 'private-user='
        ]);

        $users = Collection::make();

        /** @phpstan-ignore-next-line */
        if (! $response) return $users;

        foreach ($response->channels as $name => $channel) {
            $users->put($name, Str::after($name, 'private-user='));
        }

        /** @var \Illuminate\Database\Eloquent\Collection $users */
        $users = User::query()->find($users->unique()->values());


        if ($visible) {
            return $users->filter(function (User $user) use ($visible) {
                return $this->visibleTo($visible, $user);
            });
        }

        return $users;
    }
}
