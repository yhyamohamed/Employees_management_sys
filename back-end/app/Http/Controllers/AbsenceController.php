<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAbsenceRequest;
use App\Http\Requests\UpdateAbsenceRequest;
use App\Models\Absence;

class AbsenceController extends Controller
{

    public function index()
    {
        return response()->json(Absence::all(), 200);
    }


    public function store(StoreAbsenceRequest $request)
    {
        $created_entry = Absence::create($request->all());

        if ($created_entry) {
            return response()->json($created_entry, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant add that entry'], 500);
        }
    }


    public function show($id)
    {
        $entry = Absence::find($id);

        if ($entry) {
            return response()->json($entry, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant find that entry'], 500);
        }
    }

    public function update(UpdateAbsenceRequest $request, Absence $absence)
    {
        $updated_entry = Absence::update($request->all());

        if ($updated_entry) {
            return response()->json($updated_entry, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant add that entry '], 500);
        }
    }


    public function destroy(Absence $absence)
    {
        $deleted = $absence->delete();
        if ($deleted) {
            return response()->json('a entry deleted successfully !', 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant find that entry'], 500);
        }
    }
}
