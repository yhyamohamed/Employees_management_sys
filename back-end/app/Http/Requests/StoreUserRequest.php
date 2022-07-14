<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'employee_code' => ['required', 'unique:users'],
            'email' => ['required', 'unique:users'],
            'department_id' =>'exists:departments',
            'supervisor_id' =>'exists:users',

        ];
    }

    public function messages()
    {
        return [
            'employee_code.unique' => 'a employee with that code already there',
            'email.unique' => 'a employee with that email already there',
        ];
    }
}
