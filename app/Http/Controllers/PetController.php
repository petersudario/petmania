<?php

namespace App\Http\Controllers;

use App\Models\Owner;
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
        return Inertia::render('Pet/Index', ['pets' => Pet::all(), 'owners' => Owner::all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Pet/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $request->validate(
            [
                'pet_name' => 'required|string|max:255',
                'specie' => 'required|string|max:255',
                'remarks' => 'nullable|string|max:255',
                'birth_date' => 'required|date',
            ],
            [
                'pet_name.required' => 'O campo nome é obrigatório',
                'specie.required' => 'O campo raça é obrigatório',
                'birth_date.required' => 'O campo da data de nascimento é obrigatório',
                'image_url.image' => 'O arquivo deve ser uma imagem',
                'image_url.mimes' => 'A imagem deve ser do tipo jpeg, png ou jpg',
                'image_url.max' => 'A imagem deve ter no máximo 40MB',
            ]
        );

        if ($request->image != null) {
            $imageName = time() . "." . $request->image->extension();
            $request->image->move(public_path('images'), $imageName);
        }

        Pet::create([
            'pet_name' => $request->pet_name,
            'specie' => $request->specie,
            'remark' => $request->remarks,
            'birth_date' => $request->birth_date,
            'image_url' => $imageName ?? null,
            'fk_pet_owner_id' => $request->owner_id,
        ]);

        return redirect()->route('pet.index')->with('success', 'Pet cadastrado com sucesso');

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
        return Inertia::render('CRUD/Pet/Edit', ['pet' => Pet::find($id), 'owners' => Owner::all()]);
    }

    /**
     * Update the specified resource in storage.
     */
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate(
            [
                'pet_name' => 'required|string|max:255',
                'specie' => 'required|string|max:255',
                'remarks' => 'nullable|string|max:255',
                'birth_date' => 'required|date',
            ],
            [
                'pet_name.required' => 'O campo nome de pet é obrigatório',
                'specie.required' => 'O campo raça é obrigatório',
                'birth_date.required' => 'O campo da data de nascimento é obrigatório',
                'image_url.image' => 'O arquivo deve ser uma imagem',
                'image_url.mimes' => 'A imagem deve ser do tipo jpeg, png ou jpg',
                'image_url.max' => 'A imagem deve ter no máximo 40MB',
            ]
            );

            

        if ($request->image != null) {
            $imageName = time() . "." . $request->image->extension();
            $request->image->move(public_path('images'), $imageName);
        }

        Pet::find($id)->update([
            'pet_name' => $request->pet_name,
            'specie' => $request->specie,
            'remark' => $request->remarks,
            'birth_date' => $request->birth_date,
            'image_url' => $imageName ?? null,
            'fk_pet_owner_id' => $request->fk_pet_owner_id,
        ]);
        
        return redirect()->route('pet.index')->with('success', 'Pet atualizado com sucesso');

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Pet::destroy($id);
    }



}
