<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LanguageController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutusController;
use App\Http\Controllers\ContactController;

Route::get('/lang/{id}', [LanguageController::class,'index'])->name('lang');
Route::get('/', [HomeController::class,'index'])->name('home');
Route::get('/aboutus', [AboutusController::class,'index'])->name('aboutus');
Route::get('/contact', [ContactController::class,'index'])->name('contact');
