<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Service;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Service::create([
            'service_type' => 'Banho',
            'description' => 'Banho completo'
        ]);

        Service::create([
            'service_type' => 'Tosa',
            'description' => 'Tosa no estilo escolhido pelo cliente'
        ]);

        Service::create([
            'service_type' => 'Banho e Tosa',
            'description' => 'Banho seguido de tosagem no estilo escolhido pelo cliente'
        ]);

        Service::create([
            'service_type' => 'Hidratação',
            'description' => 'Hidratação dos pelos do animal'
        ]);


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Service::where('service_type', 'Banho')->delete();
        Service::where('service_type', 'Tosa')->delete();
        Service::where('service_type', 'Banho e Tosa')->delete();
        Service::where('service_type', 'Hidratação')->delete();
    }
};
