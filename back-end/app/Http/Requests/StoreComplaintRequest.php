<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreComplaintRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'subject' => ['required', 'unique:complaints'],
            'employee_id'=>'exists:users,id',
            'department_id'=>'exists:departments,id',
            'employee_id'=>'required',
            'department_id'=>'required',
        ];
    }
}
