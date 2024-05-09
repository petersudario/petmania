<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->autoIncrement();
            $table->timestamp('start_date')->nullable();
            $table->timestamp('end_date')->nullable();
            $table->unsignedBigInteger('fk_users_id');
            $table->unsignedBigInteger('fk_service_id');
            $table->unsignedBigInteger('fk_pet_id');
            $table->timestamps();

            $table->foreign('fk_users_id')->references('id')->on('users');
            $table->foreign('fk_service_id')->references('id')->on('service');
            $table->foreign('fk_pet_id')->references('id')->on('pet');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tasks');
    }
};