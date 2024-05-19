<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Models\Pet;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AgendaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Agenda/Index', ['pets' => Pet::all(), 'agenda' => Agenda::all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {   $dataHoraInicial =$request->date;

        // Soma meia hora (30 minutos)
        $dataHoraModificada = date("Y-m-d H:i:s", strtotime($dataHoraInicial . " +30 minutes"));
        

        // Exibe a data e hora modificada
        echo $dataHoraModificada;
        Agenda::create([
            'start_date' => $request->date,
            'end_date' => $dataHoraModificada,
            'fk_users_id' => 1,
            'fk_service_id' => 1,
            'fk_pet_id' => $request->pet_Id,
        ]);
        return redirect()->route('homepage')->with('success', 'Agenda realizada com sucesso');
    }

    /**
     * Display the specified resource.
     */
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
