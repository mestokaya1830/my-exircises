<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/admin', [AdminController::class, 'Index'])->name('index');
Route::get('/create', [AdminController::class, 'Create'])->name('create');
Route::get('/delete', [AdminController::class, 'Delete'])->name('delete');
