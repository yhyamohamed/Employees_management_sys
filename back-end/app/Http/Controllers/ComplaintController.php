<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreComplaintRequest;
use App\Http\Requests\UpdateComplaintRequest;
use App\Models\Complaint;

class ComplaintController extends Controller
{

    public function index()
    {
        return response()->json(Complaint::with('department','user')->get(), 200);

    }


    public function store(StoreComplaintRequest $request)
    {
        $created_entry = Complaint::create($request->all());

        if ($created_entry) {
            return response()->json($created_entry, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant add that entry'], 500);
        }
    }


    public function show($id)
    {
        $entry = Complaint::find($id);

        if ($entry) {
            return response()->json($entry, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant find that entry'], 500);
        }
    }


    public function update(UpdateComplaintRequest $request, Complaint $complaint)
    {
        $updated_entry = Complaint::update($request->all());

        if ($updated_entry) {
            return response()->json($updated_entry, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant add that entry '], 500);
        }
    }


    public function destroy(Complaint $complaint)
    {
        $deleted = $complaint->delete();
        if ($deleted) {
            return response()->json('a entry deleted successfully !', 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant find that entry'], 500);
        }
    }
}
