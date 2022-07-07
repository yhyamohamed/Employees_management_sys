<?php

namespace Database\Seeders;


use App\Models\ComplaintsTo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ComplaintsToSeeder extends Seeder
{

    public function run()
    {
       ComplaintsTo::factory(20)->create();
    }
}
