<?php

namespace Database\Factories;

use App\Models\Department;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;


class UserFactory extends Factory
{

    public function definition()
    {

        $managers = User::all()->whereIn('employee_group',['higher-management', 'middle-management'])->pluck('id');
        $departments_ids = Department::all()->pluck('id');
        $gender =$this->faker->randomElement(['Male', 'Female']);
        $name = $this->faker->name($gender);

        return [
            'name' =>  $name,
            'email' => $this->faker->unique()->safeEmail(),
            'employee_code'=>$this->faker->isbn10(),
            'supervisor_id'=>empty($managers )? null : $this->faker->randomElement($managers),
            'department_id'=>empty( $departments_ids )? null : $this->faker->randomElement( $departments_ids),
            'employee_group'=>$this->faker->randomElement(['higher-management', 'middle-management','part-time','full-time','intern']),
            'employee_title'=>$this->faker->randomElement(['dep-manager', 'senior','mid-senior','junior','mid-junior']),
            'gender'=>$gender,
            'phone'=>$this->faker->phoneNumber() ,
            'salary'=>$this->faker->randomFloat(3) ,
            'b_date'=>$this->faker->date(),
            'email_verified_at' => now(),
            'password' => Hash::make( $name ), // password
            'remember_token' => Str::random(10),
        ];
    }

    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
