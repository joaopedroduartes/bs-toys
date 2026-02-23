<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('retorno_montagem', function (Blueprint $table) {
            $table->id();
            $table->foreignId('referencia_id')->constrained('referencias')->onDelete('cascade');
            $table->string('num_omr');
            $table->string('num_pedido');
            $table->integer('qtd_pecas');
            $table->integer('qtd_caixas');
            $table->string('responsavel');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('retorno_montagem');
    }
};
