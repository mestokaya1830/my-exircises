<x-layout title="Register">
    <div class="container">
        <h1 style="margin-bottom: 30px;">Reset Password</h1>
        <form action="{{route('reset-password')}}" method="post" class="container border rounded p-5">
            @csrf
            @method('PUT')
            <div class="mb-3 row">
                <label for="email" class="form-label">Email</label>
                <div>
                    <input type="email" class="form-control" name="email" id="email" value="{{old('email')}}">
                    <div class="text text-danger">
                        @error('email')
                            {{ $message }}
                        @enderror
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="form-label">Password</label>
                <div>
                    <input type="password" class="form-control" name="password" id="inputPassword">
                    <div class="text text-danger">
                        @error('password')
                            {{ $message }}
                        @enderror
                    </div>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="password_confirmation" class="form-label">Confirm Password</label>
                <div>
                    <input type="password" class="form-control" name="password_confirmation" id="password_confirmation">
                </div>
            </div>
            <div class="d-grid">
                <button type="submit" class="btn btn-dark btn-lg">Reset Password</button>
            </div>
        </form>
    </div>
</x-layout>
