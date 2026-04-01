@extends('welcome')

@section('content')
    <h2>Persons</h2>
    <div>
        @if ($persons)
            <ul>
                @foreach ($persons as $item)
                    <li>
                      <span>{{ json_encode($item['name']) }}</span>
                      <span>{{ json_encode($item['age']) }}</span>
                      <span>{{ json_encode($item['company']['title']) }}</span>
                    </li>
                @endforeach
            </ul>
        @else
            <h3>No Data</h3>
        @endif
    </div>
@endsection
