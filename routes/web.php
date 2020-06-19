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

//Route::get('/', function () {
//    return view('welcome');
//});

Auth::routes();

Route::get('/', 'HomeController@index')->name('home.index');
Route::get('/profile', 'ProfileController@index')->name('profile.index');

/*
 * back-end management pages.
 * To be proxy by vue router
 */
Route::prefix('admin')->group(function () {
    $routes = ['/', 'dashboard', 'list', 'profile', 'about'];
    Route::combine( $routes, "AdminController@index");
});
