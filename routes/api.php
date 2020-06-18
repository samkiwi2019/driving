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

Route::prefix('user')->group(function(){
    Route::post('login', 'api\LoginController@login');
    Route::middleware("auth:api")->get('/all', 'api\admin\AdminController@index');
});
