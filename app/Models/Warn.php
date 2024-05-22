<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Warn extends Model
{
    use HasFactory;

    protected $table = 'warn';

    protected $fillable = [
        'title',
        'fk_users_id',
        'description',
    ];
}
