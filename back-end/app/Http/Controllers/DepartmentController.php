<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDepartmentRequest;
use App\Http\Requests\UpdateDepartmentRequest;
use App\Models\Department;
use App\Models\Absence;
use App\Models\Vacation;

class DepartmentController extends Controller
{

    public function index()
    {

        return response()->json(Department::with('manager')->get(), 200);
    }

    public function store(StoreDepartmentRequest $request)
    {
        $created_dep = Department::create($request->all());

        if ($created_dep) {
            return response()->json($created_dep, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant add that department'], 500);
        }
    }

    public function show($id)
    {
        $dep = Absence::find($id);

        if ($dep) {
            return response()->json($dep, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant find that department'], 500);
        }
    }


    public function update(UpdateDepartmentRequest $request, Department $department)
    {
//        dd($department);
        $updated_dep = $department->update($request->all());
        if ($updated_dep) {
            return response()->json($updated_dep, 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant add that department'], 500);
        }
    }


    public function destroy(Department $department)
    {
        $deleted = $department->delete();
        if ($deleted) {
            return response()->json('a department deleted successfully !', 200);
        } else {

            return response()->json(['Error' => 'some thing went wrong sry we cant find that department'], 500);
        }
    }
}
