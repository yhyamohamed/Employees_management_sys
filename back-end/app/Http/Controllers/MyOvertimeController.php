<?php

namespace App\Http\Controllers;

use App\Models\OverTime;
use App\Models\User;
use Illuminate\Http\Request;

class MyOvertimeController extends Controller
{
    public function index()
    {
        return response()->json(OverTime::with('user','user.department','user.supervisor')
            ->where('user_id',auth('sanctum')->user()->id)->get());
    }

}
