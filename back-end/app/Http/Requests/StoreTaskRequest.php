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
            'created_by' => 'exists:users,id',
            'due_date' => 'required',
            'priority' => 'required',
            'status' => ['in:opened', 'done','waiting','need-help'],
        ];
    }
}
