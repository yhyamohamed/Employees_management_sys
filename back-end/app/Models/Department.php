<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    use HasFactory;

    public function users()
    {
        return $this->hasMany(User::class);
    }

    public function manager()
    {
        return $this->belongsTo(User::class, 'manager_id');
    }
//make pivot
    public function tasks()
    {
        return $this->belongsToMany(Task::class);
    }

    public function vacations()
    {
        return $this->hasMany(Vacation::class);
    }

    public function complaints()
    {
        return $this->hasMany(Complaint::class);
    }
}
