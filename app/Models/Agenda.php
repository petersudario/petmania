<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Agenda extends Model
{
    use HasFactory;
    protected $table = 'tasks';
    protected $primaryKey = 'id';
    protected $fillable = [
        'start_date',
        'end_date',
        'fk_users_id',
        'fk_pet_owner_id',
        'fk_service_id',
        'fk_pet_id',
    ];
}
