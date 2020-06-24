<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::apiResource('/get', 'rrl');
Route::apiResource('/get/update', 'rrl@update');