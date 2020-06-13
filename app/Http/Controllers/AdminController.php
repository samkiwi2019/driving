<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth.admin');
    }

    public function index()
    {
        return view('admin.index');
    }

    public function add()
    {
        return view('admin.addQuiz');
    }

    public function edit()
    {
        return view('admin.editQuiz');
    }

    public function quizzes()
    {
        return view('admin.quizzes');
    }
    public function about()
    {
        return view('admin.about');
    }

}
