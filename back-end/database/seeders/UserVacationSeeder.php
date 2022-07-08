<?php

namespace Database\Seeders;

use App\Models\UserVacation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserVacationSeeder extends Seeder
{

    public function run()
    {
     UserVacation::factory(30)->create();
    }
}
