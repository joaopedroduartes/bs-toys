<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('retorno_montagem', function (Blueprint $table) {
            $table->string('montagem')->after('referencia_id');
        });
    }

    public function down(): void
    {
        Schema::table('retorno_montagem', function (Blueprint $table) {
            $table->dropColumn('montagem');
        });
    }
};