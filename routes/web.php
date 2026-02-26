<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return redirect()->route('login');
});

Route::get('/home', function () {
    return Inertia::render('Home');
})->middleware(['auth'])->name('home');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/test-login', function () {
    \DB::table('users')->where('name', 'admin')->update([
        'password' => \Hash::make('bstoys26')
    ]);
    $user = \DB::table('users')->where('name', 'admin')->first();
    return ['password' => $user->password];
});

require __DIR__.'/auth.php';