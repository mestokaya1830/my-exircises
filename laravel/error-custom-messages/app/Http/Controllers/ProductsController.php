<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
use App\Http\Requests\ProductsRequest;
use Illuminate\Support\Facades\Redirect;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Products::all();
        return view('products', compact('products'));
    }

    public function create()
    {
        return view('create');
    }

    public function store(ProductsRequest $request)
    {
        Products::create($request->post());
        Redirect('/products');

    }

    public function show($id)
    {
    }

    public function edit($id)
    {
    }

    public function update(Request $request, $id)
    {
    }

    public function destroy($id)
    {
    }
}
