<?php

namespace Database\Seeders;

use App\Models\Department;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ManagementSeeder extends Seeder
{

    public function run()
    {
        Department::factory(1)->create(
            [
                'name' => 'Management',
                'manager_id' => null
            ]
        );
        //create 7 users
        User::factory(3)->create(
            [
                'employee_group' => 'higher-management',
                'employee_title' => 'higher-management'
            ]
        );
        User::factory(3)->create(
            [
                'employee_group' => 'middle-management',
                'employee_title' => 'middle-management'
            ]
        );
    }
}
