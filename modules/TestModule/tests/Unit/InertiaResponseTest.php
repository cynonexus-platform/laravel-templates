<?php

namespace NexusCommerce\TestModule\Tests\Unit;

use Inertia\Testing\AssertableInertia;
use Tests\TestCase;

class InertiaResponseTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_that_inertia_response_is_pass(): void
    {
        $this->get('/test')->assertInertia(function (AssertableInertia $page) {
            $page->component('modules/TestModule/resources/Pages/index')->where('module', 'TestModule');
        });
    }
}
