<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RetornoMontagem extends Model
{
    protected $table = 'retorno_montagem';

    protected $fillable = [
        'referencia_id',
        'montagem',
        'num_omr',
        'num_pedido',
        'qtd_pecas',
        'qtd_caixas',
        'responsavel',
    ];

    public function referencia()
    {
        return $this->belongsTo(Referencia::class);
    }
}
