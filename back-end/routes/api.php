<?php

use App\Http\Controllers\AbsenceController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\ComplaintController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\LeaveController;
use App\Http\Controllers\OverTimeController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\VacationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('/login',[UserController::class,'login']);


Route::resource('/users', UserController::class)->missing(function (Request $request, Exception $e) {
    return response()->json(['Error' => 'sry we cant find that user'], 500);
});

Route::resource('/departments', DepartmentController::class);
Route::resource('/tasks', TaskController::class);
Route::resource('/vacations', VacationController::class);
Route::resource('/complaints', ComplaintController::class);
Route::resource('/attendance', AttendanceController::class);
Route::resource('/absence', AbsenceController::class);
Route::resource('/leave', LeaveController::class);
Route::resource('/over-time', OverTimeController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
