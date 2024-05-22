<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;
use App\Models\Agenda;
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

        $agenda = Agenda::where('tasks.created_at', '>=', now()->subDays(5))
            ->join('users', 'tasks.fk_users_id', '=', 'users.id')
            ->join('service', 'tasks.fk_service_id', '=', 'service.id')
            ->join('pet', 'tasks.fk_pet_id', '=', 'pet.id')
            ->select('tasks.*', 'users.*', 'service.*', 'pet.*')
            ->get();

        $agenda = $agenda->map(function ($task) {

            return [
                'id' => $task->id,
                'start_date' => Carbon::parse($task->start_date)->format('d/m/Y H:i'),
                'end_date' => Carbon::parse($task->end_date)->format('d/m/Y H:i'),
                'status' => $task->status,
                'user_name' => $task->name,
                'user_email' => $task->email,
                'user_phone_number' => $task->phone_number,
                'user_address' => $task->address,
                'user_cpf' => $task->cpf,
                'pet_name' => $task->pet_name,
                'specie' => $task->specie,
                'vacinado' => $task->vacinado,
                'image_url' => $task->image_url,
                'remarks' => $task->remarks,
                'fk_pet_owner_id' => $task->fk_pet_owner_id,
                'birth_date' => $task->birth_date,
                'service_type' => $task->service_type,
                'description' => $task->description,
                'created_at' => Carbon::parse($task->created_at)->format('d/m/Y H:i'),
                'updated_at' => $task->updated_at,
            ];
        });

        return Inertia::render("Dashboard", ['pets' => $pets, 'users' => $users, 'agenda' => $agenda]);
    }
}