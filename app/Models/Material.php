<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Material extends Model
{
    protected $fillable = ['referencia_id', 'codigo', 'descricao', 'quantidade'];

    public function referencia()
    {
        return $this->belongsTo(Referencia::class);
    }
}
