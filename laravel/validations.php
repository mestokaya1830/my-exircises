<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CheckRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'email' => ['required', 'email','unique:users'],//users is table name
            'name' => ['required', 'min:2', 'max:50'],
            'price' => ['required','decimal:2','gt:4','lt:300'],
            'state' => ['required','boolean'],
            'lastname' => ['required', 'min:2', 'max:50'],
            'password' => ['required', 'min:6', 'max:100', 'confirmed'],
            'birthdate' => ['required', 'date', 'before:-18 years'],
            'age' => ['required', 'before:-18', 'integer'],
            'start' => ['required', 'date', 'after:now'],
            'finish' => ['required', 'date', 'after:start'],
            'image' => ['image', 'required', 'max:1024', 'mimes:jpg,jpeg,png'],
        ];
    }
}
