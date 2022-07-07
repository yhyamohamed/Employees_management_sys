<?php

namespace Database\Seeders;


use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{

    public function run()
    {
        $this->call([
            //create management
            ManagementSeeder::class,
            //create departments (6)
            DepartmentSeeder::class,
            //create rest of users 100
            UserSeeder::class,
            // create tasks
            TaskSeeder::class,
            //assign staff to tasks
            TaskUserSeeder::class,
            VacationSeeder::class,

            ComplaintSeeder::class,
            ComplaintsToSeeder::class,

            AttendanceSeeder::class,
            LeaveSeeder::class,
            OverTimeSeeder::class,
            AbsenceSeeder::class,

        ]);


        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
