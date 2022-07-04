<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('code');
            $table->text('description');
            $table->timestamp('due_date');
            $table->foreignId('created_by')->constrained('users')->cascadeOnUpdate()->nullOnDelete();
            $table->integer('priority');
            $table->enum('status', ['opened', 'done','waiting','need-help']);
            $table->timestamps();
        });
    }


    public function down()
    {
        Schema::dropIfExists('tasks');
    }
};
