<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

Route::get('/', function () {
    return view('welcome');
});
Route::get('/file-upload', function(){
    return view('fileupload');
});
Route::post('/upload-doc-file', function(Request $req){
    $name = time().'.'.$req->file->getClientOriginalExtension();
  
       $req->file->move(public_path('uploads'), $name);
  
        return response()->json(['success'=>'Successfully uploaded.']);
});
