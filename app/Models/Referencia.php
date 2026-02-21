<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Referencia extends Model
{
    protected $fillable = ['erp', 'ref', 'desc', 'qty'];

    public function materiais()
    {
        return $this->hasMany(Material::class);
    }
}
