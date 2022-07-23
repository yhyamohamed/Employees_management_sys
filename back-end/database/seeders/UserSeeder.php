<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{

    public function run()
    {
        User::create([
            'name' => 'admin',
            'email' => 'admin@mail.com',
            'password' => Hash::make('123'),
            'employee_code' => 'admin',
            'employee_group' => 'admin',
            'employee_title' => 'admin',
            'gender' => 'Male',
            'phone' => '123',
            'salary' => '9999',
            'b_date' => '1975-01-01',
            'department_id' => '1',
        ]);
        User::factory(100)->create();
    }
}
