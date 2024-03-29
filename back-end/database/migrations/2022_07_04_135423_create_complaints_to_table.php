<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('complaints_to', function (Blueprint $table) {
            $table->id();
            $table->foreignId('complaint_id')->constrained()->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('cc_to')->nullable()->constrained('users')->cascadeOnUpdate()->cascadeOnDelete();
            $table->enum('recommendation', ['reviewing', 'pending','solved','rejected']);
            $table->text('reasons')->nullable();
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('complaints__to');
    }
};
