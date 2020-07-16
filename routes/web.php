<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

$routes = ['/','/login','/register','/learn/{id}','/mock/{id}', '/about', '/admin','/admin/dashboard', '/admin/list', '/admin/profile', '/admin/about'];
Route::combine($routes, 'HomeController@index');
