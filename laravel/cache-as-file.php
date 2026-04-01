<?php
use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Support\Facades\Cache;

Route::get('/', function () {
//cache
    //first go to env file and change cache mode as file and read value from cache
    if(Cache::has('users')){
        $users = Cache::get('users');
        return $users;
      } else {
          $users = DB::table('users')->get();
          Cache::put('users',$users, 10);//cache expire 1 is 1 second
          return $users.'From DB';
      }
    return view('welcome');
});
