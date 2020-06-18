@extends('layouts.app')

@section('content')
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Dashboard</div>

                    <div class="card-body">
                        @if (session('status'))
                            <div class="alert alert-success" role="alert">
                                {{ session('status') }}
                            </div>
                        @endif
                            {{ Auth::user()->nickname }} are logged in!
                    </div>
                    <a href="/admin/index">admin index</a>
                </div>
                <br>
                <br>
                <br>
                <br>
                <test></test>
            </div>
        </div>
    </div>
@endsection
