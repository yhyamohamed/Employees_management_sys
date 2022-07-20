<?php

namespace App\Rules;

use Attribute;
use Illuminate\Contracts\Validation\InvokableRule;
use Carbon\Carbon;

class Duration implements InvokableRule
{
    /**
     * Run the validation rule.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     * @return void
     */
    public function __invoke($attribute, $value, $fail)
    {
        $start_date=Carbon::create(request()->start_date);
        $end_date=Carbon::create(request()->end_date);
        if($start_date->addDays($value) != $end_date){
            $fail('The :attribute must equal the number of days from start to end');
        }
       
    }
}
