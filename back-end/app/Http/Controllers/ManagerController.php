<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class ManagerController extends Controller
{

    public function index()
    {

        $managers= User::with('department','supervisor')->whereIn('employee_group',['higher-management', 'middle-management'])->get();
        return response()->json($managers, 200);

    }


    public function store(Request $request)
    {
        //
    }

    public function show($id)
    {
        //
    }


    public function update(Request $request, $id)
    {
        //
    }


    public function destroy($id)
    {
        //
    }
}
