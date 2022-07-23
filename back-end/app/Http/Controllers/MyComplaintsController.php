<?php

namespace App\Http\Controllers;

use App\Models\Complaint;
use App\Models\User;
use Illuminate\Http\Request;

class MyComplaintsController extends Controller
{
    public function index()
    {
        $targetUser = User::where('remember_token',request()->bearerToken())->get('id');
        return response()->json(Complaint::with('department','user')->where('employee_id',$targetUser[0]->id)->get());
    }
}
