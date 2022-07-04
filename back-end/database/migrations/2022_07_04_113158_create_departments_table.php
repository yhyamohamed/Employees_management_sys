<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('departments', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->foreignId('manager_id')->constrained('users')->cascadeOnUpdate()->nullOnDelete();
            $table->date('manager_start_at');
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('departments');
    }
};
