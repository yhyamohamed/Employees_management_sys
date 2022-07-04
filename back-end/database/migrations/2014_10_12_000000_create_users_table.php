<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('employee_code')->unique();
            $table->string('name');
            $table->string('employee_group');
            $table->string('employee_title');
            $table->set('gender', ['Male', 'Female']);
            $table->foreignId('supervisor_id')->constrained('users')->cascadeOnUpdate()->nullOnDelete();
            $table->foreignId('department_id')->constrained()->cascadeOnUpdate()->nullOnDelete();
            $table->string('phone');
            $table->double('salary', 6, 3);
            $table->date('hired_at');
            $table->date('b_date');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('users');
    }
};
