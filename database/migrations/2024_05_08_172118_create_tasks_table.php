<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->dateTime('start_date');
            $table->dateTime('end_date');
            $table->unsignedBigInteger('fk_users_id'); // Assuming this is a foreign key to a users table
            $table->unsignedBigInteger('fk_pet_owner_id'); // Assuming this is a foreign key to a pet_owners table
            $table->unsignedBigInteger('fk_service_id'); // Assuming this is a foreign key to a services table
            $table->unsignedBigInteger('fk_pet_id'); // Assuming this is a foreign key to a pets table
            $table->timestamps();

            // Foreign key constraints
            $table->foreign('fk_users_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('fk_pet_owner_id')->references('id')->on('pet_owners')->onDelete('cascade');
            $table->foreign('fk_service_id')->references('id')->on('services')->onDelete('cascade');
            $table->foreign('fk_pet_id')->references('id')->on('pets')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
