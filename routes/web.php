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
    Route::get('index', "AdminIndexController@index")->name("admin.index");
    Route::get('quizzes', "AdminQuizzesController@index")->name("adminquizzes.show");
    Route::get('addquiz', "AdminAddQuizController@index")->name("adminaddquiz.show");
});