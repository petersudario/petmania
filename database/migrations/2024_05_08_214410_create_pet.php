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
        Schema::create('pet', function (Blueprint $table) {
            $table->unsignedBigInteger('id')->autoIncrement();
            $table->string('pet_name', 80);
            $table->string('specie', 255);
            $table->tinyInteger('vacinado')->default(0);
            $table->string('image_url', 255)->nullable();
            $table->string('remark', 255)->nullable();
            $table->unsignedBigInteger('fk_pet_owner_id');
            $table->foreign('fk_pet_owner_id')->references('id')->on('users')->onDelete('restrict');
            $table->date('birth_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pet');
    }
};