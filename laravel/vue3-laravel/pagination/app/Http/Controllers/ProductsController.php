<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductsController extends Controller
{
    public function index()
    {
        return Products::paginate(4);
    }

    public function create()
    {
    }

    public function store(Request $request)
    {
    }

    public function show(Products $products)
    {
    }

    public function edit(Products $products)
    {
    }

    public function update(Request $request, Products $products)
    {
    }

    public function destroy(Products $products)
    {
    }
}
