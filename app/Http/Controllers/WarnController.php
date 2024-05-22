<?php

namespace App\Http\Controllers;

use App\Models\Warn;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WarnController extends Controller
{
    /**
     * Display a listing of the resource.
     */

     public function sendWarn(Request $request){

        $request->validate(
            [
                'title' => 'required|string|max:255',
                'description' => 'required|string|max:255',
            ],
            [
                'title.required' => 'O campo título é obrigatório',
                'description.required' => 'O campo descrição é obrigatório',
            ]
        );


        $user_id = auth()->user()->id;

        $warn = new Warn();
        $warn->title = $request->title;
        $warn->fk_users_id = $user_id;
        $warn->description = $request->description;
        $warn->save();

        return redirect()->route('services');
     }

     public function index() {
        return Inertia::render('Warn/Index');
     }

  
}
