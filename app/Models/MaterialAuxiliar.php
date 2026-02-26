<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MaterialAuxiliar extends Model
{
    protected $fillable = [
        'cod_prod',
        'cod_erp',
        'descricao',
    ];
}
