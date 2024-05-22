<?php

namespace App\Http\Controllers;

use App\Models\Warn;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServicesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $warns = Warn::join('users', 'users.id', '=', 'warn.fk_users_id')
            ->select('warn.*', 'users.name', 'users.cpf', 'users.email', 'users.phone_number')
            ->get();

        return Inertia::render('Services', ['warns' => $warns]);
    }

  
}
