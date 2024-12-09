<?php

namespace NexusCommerce\TestModule\Http\Controllers;

use App\Http\Controllers\Controller;

class TestModuleController extends Controller
{
    public function web()
    {
        return inertia('modules/TestModule/resources/Pages/index', [
            'module' => 'TestModule',
        ]);
    }

    public function api()
    {
        return [
            'module' => 'TestModule',
            'code' => response(200, 200, []),
        ];
    }
}
