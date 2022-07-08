<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Complaint extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class,'employee_id');
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }
    public function users_complaints(){
        return $this->belongsToMany(User::class,'complaints_to','complaint_id','cc_to');
    }
}
