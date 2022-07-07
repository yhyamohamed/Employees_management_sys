<?php

namespace Database\Seeders;

use App\Models\OverTime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OverTimeSeeder extends Seeder
{

    public function run()
    {
       OverTime::factory(100)->create();
    }
}
