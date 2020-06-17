<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    /**
     * Create a new policy instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /*
     *  check an user if it is themselves
     *  @return bool
     * */
    public function update(User $currentUser, User $user)
    {
        return $currentUser->id === $user->id;
    }
}
