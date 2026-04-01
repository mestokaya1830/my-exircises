<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PersonsController extends Controller
{
    public function index()
    {
        $persons = json_decode(file_get_contents(storage_path() . "/app/public/persons.json"), true);
        return view('persons', compact('persons'));
    }
}
