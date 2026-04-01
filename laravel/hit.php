<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\DB;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/users', function () {
//    $users = DB::table('users')->increment('hit', 1);//increment whole table
    DB::table('users')->whereId(1)->increment('hit', 1);//increment as name
});
