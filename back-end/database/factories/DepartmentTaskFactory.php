<?php

namespace Database\Factories;

use App\Models\Department;
use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;


class DepartmentTaskFactory extends Factory
{

    public function definition()
    {
        $departments = Department::all()->where('id', '<>', 1)->pluck('id');
        $tasks = Task::all()->pluck('id');

        return [
            'department_id' => $this->faker->randomElement($departments),
            'task_id' => $this->faker->randomElement($tasks),
            'status' => $this->faker->randomElement(['opened', 'done','waiting','need-help']),
            'note' => $this->faker->realTextBetween($minNbChars = 100, $maxNbChars = 150, $indexSize = 2),
        ];
    }
}
