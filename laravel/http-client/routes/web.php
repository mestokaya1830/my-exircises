<?php
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return Http::get('https://jsonplaceholder.typicode.com/posts')->json();
});
