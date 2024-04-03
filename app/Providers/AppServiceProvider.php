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
            return preg_match('/^(?:(?:\d{3}\.){2}\d{3}-\d{2}|(\d{11}))$/', $value);
        });

        Validator::replacer('cpf', function ($message, $attribute, $rule, $parameters) {
            return str_replace(':attribute', $attribute, 'CPF inválido. Preencha corretamente, sem hífens ou pontos.');
        });


    }
}
