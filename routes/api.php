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

//
//Route::middleware('client.credentials')->group(function () {
//    Route::get('/user', 'AdminApiController@query');
//});

Route::post('login', 'api\LoginController@login');

Route::prefix('v1')->group(function(){
    Route::middleware("auth:api")->post('/user', 'api\v1\AdminController@index');
});
