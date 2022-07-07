<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Absence>
 */
class AbsenceFactory extends Factory
{

    public function definition()
    {
        $user = $this->faker->randomElement(User::all());
        return [
            'user_id' => $user->id,
            'duration' => $this->faker->numberBetween(1, 16),
        ];
    }
}
