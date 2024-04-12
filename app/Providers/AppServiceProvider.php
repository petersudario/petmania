<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Validator::extend('cpf', function ($attribute, $value, $parameters, $validator) {
            return preg_match('/^(?:(?:\d{3}[.-]){2}\d{3}-\d{2}|(\d{11}))$/', $value);
        });


        Validator::extend('password', function ($attribute, $value, $parameters, $validator) {
            return preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/', $value);
        });

        Validator::extend('birth_date', function ($attribute, $value, $parameters, $validator) {
            $minAge = 2; // Minimum age in years
            $date = new \DateTime($value);
            $now = new \DateTime();
            $diff = $now->diff($date);
            return $diff->y >= $minAge;
        });


    }
}
