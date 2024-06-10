<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PetController;
use App\Http\Controllers\ContactsController;
use App\Http\Controllers\PetOwnerController;
use App\Http\Controllers\HomepageController;
use App\Http\Controllers\AgendaController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\WarnController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
    Route::resource("agenda", AgendaController::class);
    Route::get('/dashboard/agenda/list', [AgendaController::class, 'list'])->name('agenda.list');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/mypets', [PetController::class, 'myPets'])->name('mypets');
    Route::get('/warn', [WarnController::class, 'index'])->name('warn');
    Route::post('/warn/post', [WarnController::class, 'sendWarn'])->name('warn.send');
});

require __DIR__ . '/auth.php';