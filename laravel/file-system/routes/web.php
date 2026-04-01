<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
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

Route::get('/upload', function(){
    return view('upload');
});

Route::post('/uploadimage', function(Request $req){
    //with original name
    // $req->file->move(public_path('images'), $$req->file->getClientOriginalName());
    
    //with new name
    $imageName = 'img2'.'.'.$req->file->getClientOriginalExtension();
    $req->file->move(public_path('images'), $imageName);

});
