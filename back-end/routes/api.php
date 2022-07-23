<?php

use App\Http\Controllers\AbsenceController;
use App\Http\Controllers\AttendanceController;
use App\Http\Controllers\ComplaintController;
use App\Http\Controllers\DepartmentController;
use App\Http\Controllers\LeaveController;
use App\Http\Controllers\ManagerController;
use App\Http\Controllers\MyAttendanceController;
use App\Http\Controllers\MyComplaintsController;
use App\Http\Controllers\MyLeaveController;
use App\Http\Controllers\MyOvertimeController;
use App\Http\Controllers\MyTasksController;
use App\Http\Controllers\OverTimeController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use App\Http\Controllers\VacationController;
use App\Http\Controllers\MyVacationController;
use Illuminate\Support\Facades\Route;



Route::post('/login',[UserController::class,'login']);


Route::resource('/users', UserController::class)->missing(function (Request $request, Exception $e) {
    return response()->json(['Error' => 'sry we cant find that user'], 500);
});
Route::get('/managers',[ManagerController::class,'index']);
Route::resource('/departments', DepartmentController::class);
Route::resource('/tasks', TaskController::class);
<<<<<<< HEAD
Route::resource('/vacations', VacationController::class)->middleware(['can:viewAny']);
Route::resource('/myvacation', MyVacationController::class);
=======
Route::resource('/mytasks', MyTasksController::class);
Route::resource('/vacations', VacationController::class);
Route::resource('/myvacations', MyVacationController::class);
Route::resource('/myovertime', MyOvertimeController::class);
>>>>>>> b8170c113af434677d8ab8295668f1107f3ec31d
Route::resource('/complaints', ComplaintController::class);
Route::resource('/mycomplaints', MyComplaintsController::class);
Route::resource('/attendance', AttendanceController::class);
Route::resource('/myattendance', MyAttendanceController::class);
Route::resource('/absence', AbsenceController::class);
Route::resource('/leave', LeaveController::class);
Route::resource('/myleave', MyLeaveController::class);
Route::resource('/over-time', OverTimeController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
