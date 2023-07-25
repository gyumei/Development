<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/index', [PostController::class, 'index'])->name('index');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/debate', function() {
    return Inertia::render('Post/Debate');
});

Route::get("/personal/{user}", [PostController::class, "personal"]);

Route::get('/follow', function() {
    return Inertia::render('Post/Follow');
});

Route::get('/followers', function() {
    return Inertia::render('Post/Follower');
});

Route::get("/profile", [PostController::class, "profile"])->name('profile');

Route::get("/profiele/enroll", [PostController::class, "profiele_enroll"]);

Route::get('/like', function() {
    return Inertia::render('Post/Like');
});
});

require __DIR__.'/auth.php';
