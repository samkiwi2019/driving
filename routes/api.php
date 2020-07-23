<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group([

    'middleware' => 'api',
    'prefix' => 'v1'

], function () {

    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');

});

Route::group([

    'middleware' => 'auth:api',
    'prefix' => 'v1'

], function () {
    Route::post('me', 'AuthController@me');
    Route::post('update/{id}', 'AuthController@update')->middleware('security:11');
    Route::post('delete/{id}', 'AuthController@delete')->middleware('security:11');
    Route::post('users', 'api\v1\AdminController@users');
    Route::get('quizzes', 'api\v1\AdminController@quizzes');
    Route::post('addQuizzes', 'api\v1\AdminController@addQuizzes');

});
