<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class LanguageController extends Controller
{
    public function Index($id)
    {
        $langs = ['tr','en'];
        if(in_array($id, $langs)){
            session()->put('language',$id);
            return redirect()->back()->with('message' ,'Your language is: '.$id);
        }
    }
}
