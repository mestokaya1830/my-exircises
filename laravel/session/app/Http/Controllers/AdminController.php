<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function Index(){
        // if (!session('LoggedIn')) {
        //     return redirect('/');
        // }
        return view('admin');
    }

    public function Create(Request $request){
        $request->session()->put( 'LoggedIn', 'True');
        return session('LoggedIn');
    }

    public function Delete(Request $request){
        if ($request->session()->exists('LoggedIn')) {
            $request->session()->forget('LoggedIn');
        }
        return 'Session Deleted';
    }
}
