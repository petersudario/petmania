<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Pet;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index()
    {


        $users = User::where('created_at', '>=', now()->subDays(5))
            ->where('role', 'customer')
            ->get();

        $pets = Pet::where('pet.created_at', '>=', now()->subDays(5))
            ->join('users', 'pet.fk_pet_owner_id', '=', 'users.id')
            ->select('pet.*', 'users.*')
            ->get();

            
        $pets = $pets->map(function ($pet) {
            return [
                'id' => $pet->id,
                'pet_name' => $pet->pet_name,
                'specie' => $pet->specie,
                'vacinado' => $pet->vacinado,
                'image_url' => $pet->image_url,
                'user_name' => $pet->name,
                'user_email' => $pet->email,
                'user_phone_number' => $pet->phone_number,
                'user_address' => $pet->address,
                'user_cpf' => $pet->cpf,
                'remarks' => $pet->remarks,
                'fk_pet_owner_id' => $pet->fk_pet_owner_id,
                'birth_date' => $pet->birth_date,
                'created_at' => Carbon::parse($pet->created_at)->format('d/m/Y H:i'),
                'updated_at' => $pet->updated_at,
            ];
        });

        $users = $users->map(function ($user) {
            return [
                'id' => $user->id,
                'name' => $user->name,
                'email' => $user->email,
                'cpf' => $user->cpf,
                'phone_number' => $user->phone_number,
                'address' => $user->address,
                'birth_date' => Carbon::parse($user->birth_date)->format('d/m/Y'),
                'created_at' => Carbon::parse($user->created_at)->format('d/m/Y H:i'),
                'updated_at' => $user->updated_at,
            ];
        });

        return Inertia::render("Dashboard", ['pets' => $pets, 'users' => $users]);
    }
}