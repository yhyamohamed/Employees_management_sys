<?php

namespace Database\Seeders;

use App\Models\TasksUsers;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TasksUsersSeeder extends Seeder
{

    public function run()
    {
        TasksUsers::factory(150)->create();
    }
}
