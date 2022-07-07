<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;


class OverTimeFactory extends Factory
{

    public function definition()
    {
        $user = $this->faker->randomElement(User::all());
        return [
            'user_id' => $user->id,
            'duration' => $this->faker->numberBetween(1, 9),
        ];
    }
}
