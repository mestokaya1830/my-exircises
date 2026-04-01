<ul class="nav justify-content-center|justify-content-end">
    <li class="nav-item">
        <a class="nav-link active" href="{{route('home')}}">@lang('navbar.home')</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="{{ route('aboutus') }}">@lang('navbar.aboutus')</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" href="{{ route('contact') }}">@lang('navbar.contact')</a>
    </li>
</ul>
<ul>
    <li><a href="{{ url('lang/en') }}">English</a></li>
    <li><a href="{{ url('lang/tr') }}">Turkish</a></li>
</ul>