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
        return $this->hasMany(Task::class);
    }

    public function tasks()
    {
        return $this->belongsToMany(Task::class)->using(TasksUsers::class);
    }

    public function requestedVacations()
    {
        return $this->hasMany(Vacation::class);
    }

    public function vacations()
    {
        return $this->belongsToMany(Vacation::class);
    }

    public function complaints()
    {
        return $this->hasMany(Complaint::class);
    }
    public function attendances()
    {
        return $this->hasMany(Attendance::class);
    }
    public function abbsences()
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

    public function all_complaints()
    {
        return $this->belongsToMany(Complaint::class, 'complaints_to', 'cc_to', 'complaint_id');
    }
}
