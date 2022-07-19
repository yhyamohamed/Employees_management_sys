<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVacationRequest;
use App\Http\Requests\UpdateVacationRequest;
use App\Models\Vacation;

class VacationController extends Controller
{

    public function index()
    {
        return response()->json(Vacation::with('department','user')->get(), 200);

    }


    public function store(StoreVacationRequest $request)
    {
        $created_vacation = Vacation::create($request->all());

        if ($created_vacation) {
            return response()->json($created_vacation, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant add that vacation'], 500);
        }
    }

    public function show($id)
    {
        $vacation = Vacation::find($id);

        if ($vacation) {
            return response()->json($vacation, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant find that vacation'], 500);
        }
    }


    public function update(UpdateVacationRequest $request, Vacation $vacation)
    {
        $updated_Vacation= Vacation::update($request->all());

        if ($updated_Vacation) {
            return response()->json($updated_Vacation, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant add that vacation'], 500);
        }
    }


    public function destroy(Vacation $vacation)
    {
        $deleted = $vacation->delete();
        if ($deleted) {
            return response()->json('a vacation deleted successfully !', 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant find that vacation'], 500);
        }
    }
}
