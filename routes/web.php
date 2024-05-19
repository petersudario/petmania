<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PetController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\PetOwnerController;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\AgendaController;
use App\Http\Controllers\ServicesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PetAPI;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::resource("agenda", AgendaController::class);

Route::get("/services", [ServicesController::class, 'index'])->name('services');
Route::get("/contacts", [ContactsController::class, 'index'])->name('contacts');
Route::get("/sobre", function () {
    return Inertia::render('About');
})->name('about');

Route::post('/pet/{id}', [PetController::class, 'update'])->name('petaxios.update');


Route::get("/", [HomepageController::class, 'index'])->name('homepage');


Route::middleware('admin')->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::resource('petowner', PetOwnerController::class);
    Route::resource("pet", PetController::class);
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';