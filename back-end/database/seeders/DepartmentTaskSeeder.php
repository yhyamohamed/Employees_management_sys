<?php

namespace Database\Seeders;


use App\Models\DepartmentTask;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DepartmentTaskSeeder extends Seeder
{

    public function run()
    {
       DepartmentTask::factory(40)->create();
    }
}
