<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laravel</title>
    </head>
    <body class="antialiased">
        <h2>File Upload</h2>
        <form action="/upload" method="post" enctype="multipart/form-data">
            @csrf
            <input type="file" name="file" id="">
            <input type="submit" value="Upload">
        </form>
    </body>
</html>
