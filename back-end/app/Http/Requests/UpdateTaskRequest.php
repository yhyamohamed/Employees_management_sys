<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTaskRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        $task = $this->route('task');
        return [
            'name' => "unique:tasks,name,$task->id" ,
            'created_by'=>'exists:users,id',
        ];
    }
}
