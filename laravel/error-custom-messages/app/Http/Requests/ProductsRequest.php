<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductsRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|min:2|max:50',
            'price' => 'required|min:1|max:5'
        ];
    }

    public function attributes()
    {
        return [
            'name' => 'Ad',
            'price' => 'Fiyat'
        ];
    }
    public function messages()
    {
        return [
            'name.required' => 'Ad alani bos olamaz',
            'price.required' => 'Fiyat alani bos olamaz'
        ];
    }
}
