<?php

use Illuminate\Support\Facades\Route;
use NexusCommerce\TestModule\Http\Controllers\TestModuleController;

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

Route::get('/test', [TestModuleController::class, 'web'])->name('test-module');
