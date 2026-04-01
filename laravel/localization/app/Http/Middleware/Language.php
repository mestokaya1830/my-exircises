<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Lang;
class Language
{
    public function handle(Request $request, Closure $next)
    {
        if(session('language')){
            Lang::setLocale(session('language'));
        }
        return $next($request);
    }
}
