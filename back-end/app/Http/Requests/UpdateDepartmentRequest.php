<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateDepartmentRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        $dep = $this->route('department');
        return [
            'name' => "unique:departments,name,$dep->id",
            'manager_id'=>'exists:users,id',
        ];
    }
}
