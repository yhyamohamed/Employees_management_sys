<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreDepartmentRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'name' => ['required', 'unique:departments'],
            'manager_id'=>'exists:users,id',
        ];
    }


    public function messages()
    {
        return [
            'manager_id.exists' => 'manager id must belong to an actual employee',
            'name.unique' => 'a department with that name already there',
        ];
    }
}
