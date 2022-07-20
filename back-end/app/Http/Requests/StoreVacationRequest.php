<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVacationRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'employee_id' => 'exists:users,id',
            'department_id' => 'exists:departments,id',
            'reasons' => 'required',
            'duration' => 'required',


        ];
    }
}
