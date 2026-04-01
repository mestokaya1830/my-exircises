<?php

use Illuminate\Support\Facades\Route;

Route::view('/', 'client.index');
Route::view('/admin', 'server.index');
