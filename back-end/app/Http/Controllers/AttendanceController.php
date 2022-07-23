<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAbsenceRequest;
use App\Http\Requests\StoreAttendanceRequest;
use App\Http\Requests\UpdateAbsenceRequest;
use App\Http\Requests\UpdateAttendanceRequest;
use App\Models\Attendance;

class AttendanceController extends Controller
{

    public function index()
    {
        return response()->json(Attendance::with('user','user.department','user.supervisor')->get(), 200);
    }


    public function store(StoreAbsenceRequest $request)
    {
        $created_entry = Attendance::create($request->all());

        if ($created_entry) {
            return response()->json($created_entry, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant add that entry'], 500);
        }
    }


    public function show($id)
    {
        $entry = Attendance::find($id);

        if ($entry) {
            return response()->json($entry, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant find that entry'], 500);
        }
    }


    public function update(UpdateAbsenceRequest $request, Attendance $attendance)
    {
        $updated_entry = $attendance->update($request->all());

        if ($updated_entry) {
            return response()->json($updated_entry, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant add that user '], 500);
        }
    }

    public function destroy(Attendance $attendance)
    {
        $deleted = $attendance->delete();
        if ($deleted) {
            return response()->json('a entry deleted successfully !', 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant find that entry'], 500);
        }
    }
}
