<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomepageController extends Controller
{
    public function index(){
        return Inertia::render("HomePage");
    }
}
