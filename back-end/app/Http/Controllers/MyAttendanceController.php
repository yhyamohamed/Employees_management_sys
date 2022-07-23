<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use App\Models\User;
use Illuminate\Http\Request;

class MyAttendanceController extends Controller
{
    public function index()
    {
        $targetUser = User::where('remember_token',request()->bearerToken())->get('id');
        return response()
            ->json(Attendance::with('user','user.department','user.supervisor')
                ->where('user_id',$targetUser[0]->id)
                ->get());
    }
}
