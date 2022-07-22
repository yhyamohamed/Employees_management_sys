<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class MyTasksController extends Controller
{
    public function index()
    {
        return response()->json(Task::where('created_by', auth('sanctum')->user()->id)->get());
    }
}
