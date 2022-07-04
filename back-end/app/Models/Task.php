<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;


    public function owner()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

/*
    To determine the table name of the relationship's intermediate table,
    Eloquent will join the two related model names in alphabetical order.
    However, you are free to override this convention.
*/
    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    public function departments()
    {
        return $this->belongsToMany(Department::class);
    }
}
