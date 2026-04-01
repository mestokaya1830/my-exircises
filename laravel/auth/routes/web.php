<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

//both middleware

Route::view('/', 'client.index')->name('client.index');//use clients route instead /
Route::view('/about', 'client.about')->name('client.about');//use clients route instead /
Route::view('/contact', 'client.contact')->name('client.contact');//use clients route instead /

//guest
Route::middleware(['guest'])->group(function(){
    Route::view('/register', 'client.register')->name('register');
    Route::post('/register', [AuthController::class, 'register']);

    Route::view('/login', 'client.login')->name('login');
    Route::post('/login', [AuthController::class, 'login']);

    Route::view('/email-verfication', 'client.verfication')->name('email-verfication');
    Route::post('/email-verfication', [AuthController::class, 'emailVerfication'])->name('email-verfication');

    //gmail not accept single domain so i added client domain
    //accepted  = /client/reset-password
    //not-accepted  = /reset-password
    Route::view('/client/reset-password', 'client.reset')->name('reset-password');
    Route::put('/reset-password', [AuthController::class, 'resetPassword'])->name('reset-password');

});

//auth
Route::middleware(['auth'])->group(function(){
    Route::view('/admin', 'admin.index')->name('admin.index');
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
});
