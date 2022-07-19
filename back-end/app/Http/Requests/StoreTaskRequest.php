<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTaskRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        return [
            'name' => ['required', 'unique:tasks'],
            'created_by' =>[ 'required','exists:users,id'],
            'due_date' => 'required',
            'priority' => 'required',
            'status' => ['in:opened,done,waiting,need-help'],
        ];
    }

    public function messages()
    {
        return [
            'created_by.exists' => 'creator id must belong to an actual employee',
            'name.unique' => 'a task with that name already there',
        ];
    }
}
