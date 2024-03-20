<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pet;
use Illuminate\Support\Facades\DB;
use Str;

class PetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        try{
            DB::table('pets')->insert([
                'pet_name' => Str::random(10),
                'specie' => Str::random(10),
            ]);
        }
        catch(\Exception $e){
            echo $e->getMessage();
        }
    }
}
