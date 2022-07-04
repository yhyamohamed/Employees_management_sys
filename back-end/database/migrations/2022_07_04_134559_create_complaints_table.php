<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('complaints', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employee_id')->constrained('users')->cascadeOnUpdate()->nullOnDelete();
            $table->foreignId('department_id')->constrained()->cascadeOnUpdate()->nullOnDelete();
            $table->string('subject');
            $table->text('body');
            $table->enum('status', ['reviewing', 'pending','solved']);
            $table->text('reasons')->nullable();
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('complaints');
    }
};
