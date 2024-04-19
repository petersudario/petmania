<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pet extends Model
{
    use HasFactory;
    protected $table = "pet";

    protected $fillable = [
        'pet_name',
        'specie',
        'remarks',
        'fk_pet_owner_id',
        'birth_date',
        'image_url',
        'vacinado',

    ];
}
