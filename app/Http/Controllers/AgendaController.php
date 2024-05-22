<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Models\Pet;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AgendaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Agenda/Index', ['pets' => Pet::all(), 'agenda' => Agenda::all(), 'services' => Service::all()]);
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
    {
        $dataHoraInicial = $request->date;

        // Soma meia hora (30 minutos)
        $dataHoraModificada = date("Y-m-d H:i:s", strtotime($dataHoraInicial . " +30 minutes"));

        $task = Agenda::create([
            'start_date' => $request->date,
            'status' => 'Agendado',
            'end_date' => $dataHoraModificada,
            'fk_users_id' => $request->customer_id,
            'fk_service_id' => $request->service,
            'fk_pet_id' => $request->pet_Id,
        ]);

        return redirect()->route('agenda.show', $task->id);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $pet = Pet::find($id);
        return Inertia::render('Agenda/Show', ['task' => Agenda::find($id)->join('pet', 'pet.id', '=', 'tasks.fk_pet_id')->join('service', 'service.id', '=', 'tasks.fk_service_id')->join('users', 'users.id', '=', 'tasks.fk_users_id')->select('tasks.*', 'pet.*', 'service.*', 'users.name', 'users.cpf')->get()]);
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
        
    }

    public function startTask(string $id)
    {
        $task = Agenda::find($id);
        $task->status = 'Em andamento';
        $task->save();

        return redirect()->route('agenda.show', $task->id);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }


}
