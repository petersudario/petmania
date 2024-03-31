<?php

namespace App\Http\Controllers;

use App\Models\Pet;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

use Inertia\Inertia;

class PetController extends Controller
{
    /**
     * Display a listing of the resource.
     */

    public function index()
    {
        return Inertia::render('CRUD/Pet/Index', ['pet' => Pet::all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CRUD/Pet/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {   
        echo $request;
        DB::table('pet')->insert([
            'pet_name' => $request->nomepet,
            'specie' => $request->especiepet,
            'remark' => $request->remark,
            'fk_pet_owner_id' => 2,
        ]);

    
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render('CRUD/Pet/Show', ['pet' => Pet::find($id)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('CRUD/Pet/Edit', ['pet' => Pet::find($id)]);
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
