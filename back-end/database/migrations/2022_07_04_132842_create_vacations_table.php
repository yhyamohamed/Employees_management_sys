<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('vacations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('employee_id')->nullable()->constrained('users')->cascadeOnUpdate()->nullOnDelete();
            $table->foreignId('department_id')->nullable()->constrained()->cascadeOnUpdate()->nullOnDelete();
            $table->bigInteger('duration');
            $table->text('reasons');
            $table->boolean('paid');
            $table->date('start_date');
            $table->date('end_date');
            $table->enum('status', ['approved', 'pending','rejected']);
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('vacations');
    }
};
