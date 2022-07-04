<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;


class DepartmentFactory extends Factory
{

    public function definition()
    {
        $managers = User::all()->whereIn('employee_group',['higher-management', 'middle-management'])->pluck('id');
        return [
           'name'=>$this->faker->unique()->randomElement(['hr','accounting','web-development','mobile-development','it','marketing']),
            'manager_id'=>empty($managers )? null : $this->faker->unique()->randomElement($managers),
            'manager_start_at'=>$this->faker->date()
        ];
    }
}
