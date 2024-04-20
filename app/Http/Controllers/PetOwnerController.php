<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Owner;
use Inertia\Inertia;

class PetOwnerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Owner/Index', ['owners' => Owner::all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Owner/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|min:10|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . Owner::class . '|unique:' . User::class,
            'phone_number' => 'required|string|min:14|max:14',
            'address' => 'required|string|max:255',
            'birth_date' => 'required|date',
            'cpf' => 'required|cpf|string|unique:' . Owner::class,
        ], [
            'name.required' => 'O campo nome é obrigatório.',
            'name.max' => 'O nome informado é muito longo.',
            'email.unique' => 'O email informado já está em uso.',
            'email.email' => 'O email informado não é válido.',
            'email.required' => 'O de campo email é obrigatório.',
            'email.max' => 'O email informado é muito longo.',
            'email.lowercase' => 'O email informado deve ser minúsculo.',
            'phone_number.required' => 'O campo telefone é obrigatório.',
            'phone_number.min' => 'O telefone informado é muito curto para um número de telefone.',
            'phone_number.max' => 'O telefone informado é muito longo.',
            'address.required' => 'O campo endereço é obrigatório.',
            'address.max' => 'O endereço informado é muito longo.',
            'birth_date.required' => 'O campo data de nascimento é obrigatório.',
            'birth_date.date' => 'O campo data de nascimento deve ser uma data válida.',
            'cpf.required' => 'O campo CPF é obrigatório.',
            'cpf.unique' => 'O CPF informado já está em uso.',
        ]);

        $owner = Owner::create([
            'name' => $request->name,
            'email' => $request->email,
            'cpf' => $request->cpf,
            'phone_number' => $request->phone_number,
            'address' => $request->address,
            'phone' => $request->phone_number,
            'birth_date' => $request->birth_date,
        ]);

        return redirect(route('petowner.index'));

    }


    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}