<?php

namespace App\Http\Controllers;

use App\Models\Leave;
use App\Models\OverTime;
use App\Models\User;
use Illuminate\Http\Request;

class MyLeaveController extends Controller
{
    public function index()
    {
        $targetUser = User::where('remember_token',request()->bearerToken())->get('id');
        return response()
            ->json(Leave::with('user','user.department','user.supervisor')
                ->where('user_id',$targetUser[0]->id)
                ->get());
    }
}
