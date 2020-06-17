<?php

namespace App\Http\Controllers;

use App\Quiz;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminApiController extends Controller
{
    public function query(Request $request){
        $isSuperAdmin = auth('api')->user()->role === 'SuperAdmin'; // 1 or ""
        return auth('api')->user();
    }
    public function getQuizList($pagination){
        return Quiz::all();
    }
}
