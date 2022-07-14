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
            'employee_id'=>'exists:users',
            'department_id'=>'exists:departments',
        ];
    }
}
