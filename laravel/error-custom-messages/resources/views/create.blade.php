<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  @if ($errors->any())
    @foreach ($errors->all() as $item)
      <li>{{ $item }}</li>
    @endforeach
  @endif
  <form action="{{ route('products.store') }}" method="post">
    @csrf
    <input type="text" name="name" id="" placeholder="Name">
    <input type="text" name="price" id="" placeholder="Price">
    <input type="submit" value="Add">
  </form>
</body>
</html>