<?php

namespace App\View\Components;

use Illuminate\View\Component;

class Header extends Component
{
    public $title;
    public function __construct($data)
    {
       $this->title=$data;
    }

    public function render()
    {
        return view('components.header');
    }
}
