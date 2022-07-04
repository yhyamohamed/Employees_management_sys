<?php

namespace Database\Factories;

use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;


class TasksUsersFactory extends Factory
{
    public function definition()
    {
        $employees = User::all()->whereNotIn('employee_group', ['higher-management'])->pluck('id');
        $tasks = Task::all()->pluck('id');

        return [
            'user_id' => empty($employees) ? null : $this->faker->randomElement($employees),
            'task_id' => empty($tasks) ? null : $this->faker->randomElement($tasks),
            'status' => $this->faker->randomElement(['opened', 'done', 'waiting', 'need-help']),
            'note' => $this->faker->realTextBetween($minNbChars = 100, $maxNbChars = 150, $indexSize = 2),
        ];
    }
}
