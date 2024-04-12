<?php

namespace App\Http\Requests;

use App\Models\Owner;
use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|min:10|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:' . Owner::class . '|unique:' . User::class,
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => 'O campo nome é obrigatório.',
            'name.min' => 'O nome informado é muito curto.',
            'name.max' => 'O nome informado é muito longo.',
            'email.unique' => 'O email informado já está em uso.',
            'email.email' => 'O email informado não é válido.',
            'email.required' => 'O de campo email é obrigatório.',
            'email.max' => 'O email informado é muito longo.',
            'email.lowercase' => 'O email informado deve ser minúsculo.',
        ];
    }
}
