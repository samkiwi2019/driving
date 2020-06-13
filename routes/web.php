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

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home.index');
Route::get('/profile', 'ProfileController@index')->name('profile.index');

/*
 * back-end manager pages.
 */

Route::prefix('admin')->group(function () {
    Route::get('/', "AdminController@index")->name("admin.index");
    Route::get('quizzes', "AdminController@quizzes")->name("admin.quizzes");
    Route::get('addquiz', "AdminController@add")->name("admin.add");
    Route::get('editquiz', "AdminController@edit")->name("admin.edit");
    Route::get('about', "AdminController@about")->name("admin.about");
});
