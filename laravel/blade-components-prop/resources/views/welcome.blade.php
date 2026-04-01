<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
    </head>
    <body class="antialiased">
       <x-header data="Home Page"/>
       <p>Title comes from prop on app/view/comopnents/header.php</p>
    </body>
</html>
