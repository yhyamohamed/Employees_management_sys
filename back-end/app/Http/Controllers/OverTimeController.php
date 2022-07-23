<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAbsenceRequest;
use App\Http\Requests\StoreOverTimeRequest;
use App\Http\Requests\UpdateAbsenceRequest;
use App\Http\Requests\UpdateOverTimeRequest;
use App\Models\OverTime;

class OverTimeController extends Controller
{

    public function index()
    {
        $this->authorize('viewAny',OverTime::class);
        return response()->json(OverTime::with('user','user.department','user.supervisor')->get(), 200);

    }


    public function store(StoreAbsenceRequest $request)
    {
        $created_entry = OverTime::create($request->all());

        if ($created_entry) {
            return response()->json($created_entry, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant add that entry'], 500);
        }
    }


    public function show($id)
    {
        $entry = OverTime::find($id);

        if ($entry) {
            return response()->json($entry, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant find that entry'], 500);
        }
    }


    public function update(UpdateAbsenceRequest $request, OverTime $overTime)
    {
        $updated_entry = $overTime->update($request->all());

        if ($updated_entry) {
            return response()->json($updated_entry, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant add that user '], 500);
        }
    }


    public function destroy(OverTime $overTime)
    {
        $deleted = $overTime->delete();
        if ($deleted) {
            return response()->json('a entry deleted successfully !', 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant find that entry'], 500);
        }
    }
}
