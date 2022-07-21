<?php

namespace App\Http\Requests;
use App\Rules\Duration;
use Illuminate\Foundation\Http\FormRequest;

class UpdateVacationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            //
            'employee_id' => 'exists:users,id',
            'department_id' => 'exists:departments,id',
            'reasons' => 'required',
            'duration' => ['required', new Duration],
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date'
        ];
    }
}
