<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     */
    public function update(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => 'required|password|confirmed',
        ], [
            'password.password' => 'A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, dois números e um caractere especial.',
            'password.confirmed' => 'As senhas não coincidem.',
            'current_password.current_password' => 'A senha atual está incorreta.',
            'password.required' => 'O campo senha é obrigatório.',
            'current_password.required' => 'O campo senha atual é obrigatório.',
        ]);

        $request->user()->update([
            'password' => Hash::make($validated['password']),
        ]);

        return back();
    }
}
