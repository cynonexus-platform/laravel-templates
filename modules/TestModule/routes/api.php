<?php

use Illuminate\Support\Facades\Route;
use NexusCommerce\TestModule\Http\Controllers\TestModuleController;

/*
 *--------------------------------------------------------------------------
 * API Routes
 *--------------------------------------------------------------------------
 *
 * Here is where you can register API routes for your application. These
 * routes are loaded by the RouteServiceProvider within a group which
 * is assigned the "api" middleware group. Enjoy building your API!
 *
*/

Route::get('/test', [TestModuleController::class, 'api'])->name('test-module');
