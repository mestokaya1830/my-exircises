<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\UsersController;
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
    return view('welcome');
});

Route::get('/users', function () {
    return view('users');
});

Route::get('/getusers', function () {
    $data['name'] = 'Mustfa';
    return $data;
});

Route::post('/postusers', function (Request $req) {
    return $req;
});

Route::put('/putusers', function (Request $req) {
    return $req;
});

Route::delete('/deleteusers', function (Request $req) {
    return $req;
});
