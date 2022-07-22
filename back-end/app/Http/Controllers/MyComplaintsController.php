<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use Illuminate\Http\Request;

class MyComplaintsController extends Controller
{
    public function index()
    {
        return response()->json(Complaint::with('department','user')->where('employee_id',auth('sanctum')->user()->id)->get(), 200);
    }
}
