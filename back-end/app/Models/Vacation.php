<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacation extends Model
{
    use HasFactory;
   
    protected $fillable = [
        'employee_id',
        'department_id',
        'duration',
        'reasons',
        'paid',
        'status',
        'start_date',
        'end_date',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'employee_id');
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

    public function signedBy()
    {
        return $this->belongsToMany(User::class,'user_vacation','vacation_id','signed_by');
    }
    


}
