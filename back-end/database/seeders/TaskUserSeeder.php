<?php

namespace Database\Seeders;

use App\Models\TaskUser;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TaskUserSeeder extends Seeder
{

    public function run()
    {
        TaskUser::factory(150)->create();
    }
}
