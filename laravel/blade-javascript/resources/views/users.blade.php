<h1>Users Page</h1>
@if ($users)
    <ul>
      @foreach ($users as $item)
        <li>{{ $item }}</li>
      @endforeach
    </ul>
@endif

<script>
  const result = @json($users);
  console.log(result)
</script>