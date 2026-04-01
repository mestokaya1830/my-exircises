<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function Index(){
        $users = ['Mesto','Ali','Erkan','Faruk'];
        return view('users', compact('users'));
    }
}
