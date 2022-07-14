<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'created_at' => 'datetime:Y-m-d',
        'updated_at' => 'datetime:Y-m-d',
    ];

    public function supervisor()
    {
        return $this->belongsTo(User::class, 'supervisor_id');
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function added_tasks()
    {
        return $this->hasMany(Task::class, 'created_by');
    }

    public function tasks()
    {
        return $this->belongsToMany(Task::class)->using(TaskUser::class);
    }

    public function requestedVacations()
    {
        return $this->hasMany(Vacation::class, 'employee_id');
    }

    public function vacations()
    {
        return $this->belongsToMany(Vacation::class, 'user_vacation', 'signed_by');
    }

    public function complaints()
    {
        return $this->hasMany(Complaint::class, 'employee_id');
    }

    public function all_complaints()
    {
        return $this->belongsToMany(Complaint::class, 'complaints_to', 'cc_to', 'complaint_id');
    }

    public function attendances()
    {
        return $this->hasMany(Attendance::class);
    }

    public function absences()
    {
        return $this->hasMany(Absence::class);
    }

    public function leaves()
    {
        return $this->hasMany(Leave::class);
    }

    public function overTimes()
    {
        return $this->hasMany(OverTime::class);
    }


}
