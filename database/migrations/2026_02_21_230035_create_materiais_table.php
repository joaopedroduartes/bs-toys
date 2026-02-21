<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('materiais', function (Blueprint $table) {
        $table->id();
        $table->foreignId('referencia_id')->constrained('referencias')->onDelete('cascade');
        $table->string('codigo');
        $table->string('descricao');
        $table->string('quantidade');
        $table->timestamps();
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materiais');
    }
};
