<?php

namespace App\Http\Controllers;

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
        return Inertia::render('CRUD/Owner/Index', ['owners' => Owner::all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CRUD/Owner/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:'.Owner::class,
            'phone_number' => 'required|string|max:15',
            'address' => 'required|string|max:255',
            'birth_date' => 'required|date',
            'cpf' => 'required|string|unique:'.Owner::class,
        ], ['email.unique' => 'O email informado já está cadastrado.', 'cpf.unique' => 'O CPF informado já está cadastrado.', 'password.confirmed' => 'As senhas não coincidem.']);

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