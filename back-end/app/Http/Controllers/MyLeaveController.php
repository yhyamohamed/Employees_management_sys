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
        return response()->json(Leave::with('user','user.department','user.supervisor')
            ->where('user_id',auth('sanctum')->user()->id)->get());
    }
}
