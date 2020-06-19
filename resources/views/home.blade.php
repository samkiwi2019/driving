@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                            {{ Auth::user()->nickname }} are logged in!
                        @endif


                    </div>
                    <a href="/admin">admin index</a>
                </div>
                <br>
                <br>
                <br>
                <br>
            </div>
        </div>
    </div>
@endsection
