<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;


class TaskFactory extends Factory
{

    public function definition()
    {
        $managers = User::all()->whereIn('employee_group',['higher-management', 'middle-management'])->pluck('id');
        return [
            'name' => $this->faker->word(),
            'code' => $this->faker->ean8(),
            'description' => $this->faker->realTextBetween($minNbChars = 100, $maxNbChars = 200, $indexSize = 2),
            'due_date'=>$this->faker->date(),
            'created_by'=>empty($managers )? null : $this->faker->randomElement($managers),
            'priority'=>$this->faker->numberBetween(1,6),
            'status'=>$this->faker->randomElement(['opened', 'done','waiting','need-help']),

        ];
    }
}
