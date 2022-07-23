<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateComplaintRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $comp = $this->route('complaint');
        return [
            'subject' =>"unique:complaints,subject,$comp->id",
            'employee_id'=>'exists:users,id',
            'department_id'=>'exists:departments,id',
        ];
    }
}
