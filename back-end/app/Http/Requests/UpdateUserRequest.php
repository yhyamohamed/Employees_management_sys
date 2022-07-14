<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateUserRequest extends FormRequest
{

    public function authorize()
    {
        return true;
    }


    public function rules()
    {
        $user = $this->route('user');
        return [
            //  'name' => ['required', Rule::unique('todos')->ignore($this)],
            'email' => "unique:users,name,$user->id",
            'employee_code' => "unique:users,name,$user->id",
        ];
    }
}
