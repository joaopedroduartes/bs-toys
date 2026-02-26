<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('materiais_auxiliares', function (Blueprint $table) {
            $table->id();
            $table->string('cod_prod');
            $table->string('cod_erp');
            $table->string('descricao');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('materiais_auxiliares');
    }
};
