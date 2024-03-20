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
        Schema::create('owners', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable(false);
            $table->string('cpf', 11)->unique()->nullable(false);
            $table->string('email')->unique()->nullable(false);
            $table->string('phone_number', 11)->nullable(false);
            $table->string('address')->nullable(false);
            $table->date('birth_date')->nullable(false);
            $table->timestamps();
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('owners');

    }
};