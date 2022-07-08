<?php

namespace Database\Factories;


use App\Models\User;
use App\Models\Vacation;
use Illuminate\Database\Eloquent\Factories\Factory;


class UserVacationFactory extends Factory
{

    public function definition()
    {
        $managers = User::all()->whereIn('employee_group', ['higher-management', 'middle-management'])->pluck('id');
        $vacation = Vacation::all()->pluck('id');

        return [
            'signed_by' => $this->faker->randomElement($managers),
            'vacation_id' => $this->faker->randomElement($vacation),
            'recommendation' => $this->faker->randomElement(['approved', 'pending', 'rejected']),
            'reasons' => $this->faker->realTextBetween($minNbChars = 30, $maxNbChars = 50, $indexSize = 2),
        ];
    }
}
