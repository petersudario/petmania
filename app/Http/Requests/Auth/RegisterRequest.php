<?php

namespace App\Http\Requests\Auth;

use App\Models\Owner;
use App\Models\User;
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
            'name' => 'required|string|min:10|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => 'required|password|confirmed',
            'cpf' => 'required|cpf|string|unique:' . User::class,
            'phone_number' => 'required|string|min:14|max:14',
            'birth_date' => 'required|date|birth_date',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'O campo nome é obrigatório.',
            'name.min' => 'O nome deve ter no mínimo 10 caracteres.',
            'name.max' => 'O nome deve ter no máximo 255 caracteres.',
            'password.required' => 'O campo senha é obrigatório.',
            'password.confirmed' => 'As senhas não coincidem.',
            'password.password' => 'A senha deve conter no mínimo 8 caracteres, uma letra maiúscula, uma letra minúscula, dois números e um caractere especial.',
            'email.unique' => 'O email informado já está em uso.',
            'email.email' => 'O email informado não é válido.',
            'email.required' => 'O campo email é obrigatório.',
            'email.max' => 'O email informado é muito longo.',
            'email.lowercase' => 'O email informado deve ser minúsculo.',
            'cpf.required' => 'O campo CPF é obrigatório.',
            'cpf.cpf' => 'O CPF informado é inválido.',
            'cpf.unique' => 'O CPF informado já está em uso.', 
            'birth_date.required' => 'O campo data de nascimento é obrigatório.',
            'birth_date.date' => 'O campo data de nascimento deve ser uma data válida.',
            'birth_date.birth_date' => 'O campo data de nascimento deve ser uma data válida de pelo menos 2 anos de idade.',
            'phone_number.required' => 'O campo telefone é obrigatório.',
            'phone_number.min' => 'O telefone informado é inválido.',
        ];
    }
}
