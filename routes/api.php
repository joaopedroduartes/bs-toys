<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ReferenciaController;
use App\Http\Controllers\MaterialController;

Route::get('/referencias', [ReferenciaController::class, 'index']);
Route::post('/referencias', [ReferenciaController::class, 'store']);
Route::put('/referencias/{id}', [ReferenciaController::class, 'update']);
Route::delete('/referencias/{id}', [ReferenciaController::class, 'destroy']);

Route::get('/materiais/{referencia_id}', [MaterialController::class, 'index']);
Route::post('/materiais', [MaterialController::class, 'store']);
Route::put('/materiais/{id}', [MaterialController::class, 'update']);
Route::delete('/materiais/{id}', [MaterialController::class, 'destroy']);
