<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use App\Models\User;
use App\Models\Vacation;
use Illuminate\Http\Request;

class MyComplaintsController extends Controller
{
    public function index()
    {
        return response()->json(Complaint::with('department','user')->where('employee_id',auth('sanctum')->user()->id)->get());
    }
}
