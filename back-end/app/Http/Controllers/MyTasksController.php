<?php

namespace App\Http\Controllers;

use App\Models\Task;
use App\Models\User;
use Illuminate\Http\Request;
use function Symfony\Component\Translation\t;

class MyTasksController extends Controller
{
    public function index()
    {
        return response()->json(Task::where('created_by',auth('sanctum')->user()->id)->get());
    }
}
