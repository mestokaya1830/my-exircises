<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FileUploadController extends Controller
{
    public function Upload(Request $request)
    {
        //store to public folder with original name--------------------------
        return $request->file->move(public_path('images'), $request->file->getClientOriginalName());

        //with new name--------------------------
        //  $fileName = 'New File Name'.'.'.$request->file->getClientOriginalExtension();

        //store to storage/app/docs folder-------------
        //return $request->file('file')->store('docs');

        //store to storage/app/public folder-------------
        //return $request->file->storeAs('public', $fileName);


        //store to public folder---------------------
        //return $request->file->move(public_path('images'), $fileName);




        //storage base64 image---------------------
        // $folderName = 'New Folder';
        // $image = $request->file;
        // $image = str_replace('data:image/png;base64,', '', $image);
        // $image = str_replace(' ', '+', $image);
        // Storage::disk('public')->put('magazine/'.$folderName.'/'.$image.'.png', base64_decode($image));

        //change this code with public code in config/filesystem file to use publci folder
        // 'public' => [
        //     'driver' => 'local',
        //     'root'   => public_path() . '/upload',
        //     'url' => env('APP_URL').'/public',
        //     'visibility' => 'public',
        // ]
    }
}
