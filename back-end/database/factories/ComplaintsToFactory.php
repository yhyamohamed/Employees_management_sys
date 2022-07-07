<?php

namespace Database\Factories;

use App\Models\Complaint;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;


class ComplaintsToFactory extends Factory
{

    public function definition()
    {
        $complaint_id = $this->faker->randomElement(Complaint::all()->pluck('id'));
        $managers = User::all()->whereIn('employee_group', ['higher-management', 'middle-management'])->pluck('id');
        return [
            'complaint_id' => $complaint_id,
            'cc_to' => $this->faker->randomElement($managers),
            'reasons' => $this->faker->realTextBetween($minNbChars = 50, $maxNbChars = 52, $indexSize = 2),
            'recommendation' => $this->faker->randomElement(['reviewing', 'pending', 'solved', 'rejected']),

        ];
    }
}
