<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UsersController extends Controller
{
    public function index()
    {
        $data['name'] = 'Mustfa';
        return response()->json($data, 200);
    }
}
