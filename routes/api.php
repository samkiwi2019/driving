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

    Route::post('/register', 'api\v1\UserController@register');
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');

});

Route::group([

    'middleware' => 'auth:api',
    'prefix' => 'v1'

], function () {

    Route::post('/me', 'AuthController@me');

    // user-related
    Route::get('/user', 'api\v1\UserController@index')->name("user.index");
    Route::post('/user', 'api\v1\UserController@create')->name("user.create")->middleware('security:11');
    Route::put('/user/{id}', 'api\v1\UserController@update')->name("user.update")->middleware('security:11');
    Route::delete('/user/{id}', 'api\v1\UserController@destroy')->name('user.destroy')->middleware('security:11');

    // quiz-related
    Route::get('/quiz', 'api\v1\QuizController@index')->name("quiz.index");
    Route::post('/quiz', 'api\v1\QuizController@create')->name("quiz.create")->middleware('security:11');
    Route::put('/quiz/{id}', 'api\v1\QuizController@update')->name("quiz.update")->middleware('security:11');
    Route::delete('/quiz/{id}', 'api\v1\QuizController@destroy')->name("quiz.destroy")->middleware('security:11');
});
