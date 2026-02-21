<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ReferenciaController;
use App\Http\Controllers\MaterialController;

Route::get('/', function () {
    return Inertia::render('Home');
});

// API Rotas
Route::get('/api/referencias', [ReferenciaController::class, 'index']);
Route::post('/api/referencias', [ReferenciaController::class, 'store']);
Route::put('/api/referencias/{id}', [ReferenciaController::class, 'update']);
Route::delete('/api/referencias/{id}', [ReferenciaController::class, 'destroy']);

Route::get('/api/materiais/{referencia_id}', [MaterialController::class, 'index']);
Route::post('/api/materiais', [MaterialController::class, 'store']);
Route::put('/api/materiais/{id}', [MaterialController::class, 'update']);
Route::delete('/api/materiais/{id}', [MaterialController::class, 'destroy']);