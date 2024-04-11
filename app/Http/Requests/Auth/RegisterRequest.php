<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string', 'min:8'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'O campo nome é obrigatório.',
            'name.max' => 'O campo nome deve ter no máximo 255 caracteres.',
            'email.required' => 'O campo email é obrigatório.',
            'email.string' => 'O campo email deve ser uma string.',
            'email.email' => 'O campo email deve ser um endereço de e-mail válido.',
            'password.required' => 'O campo senha é obrigatório.',
            'cpf.required' => 'O campo cpf é obrigatório.',
            'cpf.max' => 'O campo cpf deve ter no máximo 11 caracteres.',
            'cpf.cpf' => 'O campo cpf deve ser um CPF válido.',
            'cpf.min' => 'O campo cpf deve ter no mínimo 11 caracteres.',
            'password.min' => 'O campo senha deve ter no mínimo 8 caracteres.'

        ];
    }
}
