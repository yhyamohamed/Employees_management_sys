<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;


class ComplaintFactory extends Factory
{

    public function definition()
    {
        $user = $this->faker->randomElement(User::all());
        return [
            'employee_id' => $user->id,
            'department_id' => $user->department->id,
            'subject' => $this->faker->word(),
            'body' => $this->faker->realTextBetween($minNbChars = 100, $maxNbChars = 155, $indexSize = 2),
            'status' => $this->faker->randomElement(['reviewing', 'pending', 'solved']),
            'reasons' => $this->faker->realTextBetween($minNbChars = 50, $maxNbChars = 52, $indexSize = 2),

        ];
    }
}
