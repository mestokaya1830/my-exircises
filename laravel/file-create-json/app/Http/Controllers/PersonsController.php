<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\File;

class PersonsController extends Controller
{
    public function store()
    {
        $persons = json_decode(file_get_contents(storage_path() . "/app/public/persons.json"), true);
        File::put(public_path('/uploads/'.'persons.json'), json_encode($persons));
    }
}
