<?php

use Illuminate\Support\Facades\Route;
Use App\Http\Controllers\ProductsController;

Route::get('/', function () {
    return view('welcome');
});

Route::resource('/products', ProductsController::class);
