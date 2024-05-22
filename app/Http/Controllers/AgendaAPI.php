<?php

namespace App\Http\Controllers;

use App\Models\Agenda;
use App\Models\Pet;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AgendaAPI extends Controller
{
    public function updateTaskStatus($id, Request $request)
    {
        $task = Agenda::findOrFail($id);
        $status = $request->input('status');
                
        $task->status = $status;
        $task->save();

        return response()->json(['status' => $task->status]);
    }

}
