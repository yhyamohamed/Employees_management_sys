<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class VacationFactory extends Factory
{

    public function definition()
    {
        $user = $this->faker->randomElement(User::all());
        return [
            'employee_id' => $user->id,
            'department_id' => $user->department->id,
            'duration' => $this->faker->numberBetween(1, 31),
            'reasons' => $this->faker->realTextBetween($minNbChars = 50, $maxNbChars = 52, $indexSize = 2),
            'paid' => $this->faker->randomElement([true, false]),
            'start_date' => $this->faker->dateTimeBetween('-1 week', '+1 week'),
            'end_date' => $this->faker->dateTimeBetween('+1 week', '+4 week'),
            'status' => $this->faker->randomElement( ['approved', 'pending','rejected'])
        ];
    }
}
