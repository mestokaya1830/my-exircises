<x-layout title="Login">
    <div class="container">
        <h1 style="margin-bottom: 30px;">Email Verfication</h1>
        <form action="{{ route('email-verfication') }}" method="post" class="container border rounded p-5">
            @csrf
            <div class="mb-3 row">
                <label for="email" class="form-label">Email</label>
                <div>
                    <input type="email" class="form-control" name="email" id="email" value="{{ old('email') }}">
                    <div class="text text-danger">
                        @error('email')
                            {{ $message }}
                        @enderror
                    </div>
                </div>
            </div>

            <div class="text text-danger mt-3">
                @error('credential')
                {{$message}}
                @enderror
            </div>
            <div class="d-grid">
                <button type="submit" class="btn btn-dark btn-lg">Send</button>
            </div>
        </form>
    </div>
</x-layout>
