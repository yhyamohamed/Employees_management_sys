<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;

class TaskController extends Controller
{

    public function index()
    {
        return response()->json(Task::all(), 200);

    }


    public function store(StoreTaskRequest $request)
    {
        $created_task = Task::create($request->all());

        if ($created_task) {
            return response()->json($created_task, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant add that task'], 500);
        }
    }

    public function show($id)
    {
        $entry = Absence::find($id);

        if ($entry) {
            return response()->json($entry, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant find that task'], 500);
        }
    }

    public function update(UpdateTaskRequest $request, Task $task)
    {
        $updated_task= Task::update($request->all());

        if ($updated_task) {
            return response()->json($updated_task, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant add that task'], 500);
        }
    }


    public function destroy(Task $task)
    {
        $deleted = $task->delete();
        if ($deleted) {
            return response()->json('a task deleted successfully !', 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant find that task'], 500);
        }
    }
}
