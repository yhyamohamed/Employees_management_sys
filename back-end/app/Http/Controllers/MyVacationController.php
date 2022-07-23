<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVacationRequest;
use App\Http\Requests\UpdateVacationRequest;
use App\Models\MyVacation;
use App\Models\User;
use App\Models\Vacation;

class MyVacationController extends Controller
{

    public function index()
    {
        return response()->json(Vacation::with('department','user')->where('employee_id',auth('sanctum')->user()->id)->get());
    }




}
