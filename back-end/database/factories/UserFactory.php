<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;


class UserFactory extends Factory
{

    public function definition()
    {
        $name = $this->faker->name();
        return [
            'name' =>  $name ,
            'email' => $this->faker->unique()->safeEmail(),
            'employee_code'=>$this->faker->isbn10(),
            'employee_group'=>$this->faker->randomElement(['higher-management', 'middle-management','part-time','full-time','intern']),
            'employee_title'=>$this->faker->randomElement(['dep-manager', 'senior','mid-senior','junior','mid-junior']),
            'gender'=>$this->faker->randomElement(['Male', 'Female']),
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
