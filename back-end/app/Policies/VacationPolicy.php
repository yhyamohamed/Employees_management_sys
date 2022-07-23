<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Vacation;
use Illuminate\Auth\Access\Response;
use Illuminate\Auth\Access\HandlesAuthorization;

class VacationPolicy
{
    use HandlesAuthorization;


    public function viewAny(User $user)
    {
        return  ( $user->employee_group === 'higher-management' || $user->employee_group === 'middle-management' )?
            Response::allow()
            : Response::deny('You can not view this data.');
    }


    public function view(User $user)
    {
    //
    }

    public function update(User $user, Vacation $vacation)
    {
        return $vacation->user->is($user)?
            Response::allow()
            : Response::deny('You dont own this entry.');
    }


    public function delete(User $user, Vacation $vacation)
    {
        //
    }


    public function restore(User $user, Vacation $vacation)
    {
        //
    }


    public function forceDelete(User $user, Vacation $vacation)
    {
        //
    }
}
