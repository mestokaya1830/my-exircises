
<?php
//check params------------------------------------------------------------------
Route::get('/user/{name}/{id?}', function ($name, $id = null) {
    return 'Hello ' . $name . ' ' . $id;
})->where("id", '[0-9]+');

//array
Route::get('/user/{name}/{id?}', function ($name, $id = null) {
    return 'Hello ' . $name . ' ' . $id;
})->where(["name" => "[a-z]+", "id" => "[0-9]+"]);

//shorthend
Route::get('/user/{name}/{id?}', function ($name, $id = null) {
    return 'Hello ' . $name . ' ' . $id;
})->whereNumber("id")->whereAlpha("name");

//check query
Route::get('/test', function(Request $request) {
    //for query type url http://localhost:8000/test?name=mesto&city=antep
    return $request->name . ' '. $request->city;
});
