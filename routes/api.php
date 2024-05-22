<?php

use App\Http\Controllers\SearchController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AgendaAPI;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/search', [SearchController::class, 'search'])->name('search');
Route::get('/get_pet_from_customer', [SearchController::class, 'getPetsFromCustomer'])->name('get_pet_from_customer');
// Route::put('/startTask/{id}', [AgendaAPI::class, 'startTask'])->name('startTask');
// Route::put('/stopTask/{id}', [AgendaAPI::class, 'stopTask'])->name('stopTask');
// Route::put('/finishTask/{id}', [AgendaAPI::class, 'finishTask'])->name('finishTask');

Route::put('/updateTaskStatus/{id}', [AgendaAPI::class, 'updateTaskStatus']);
