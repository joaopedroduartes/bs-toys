<?php

namespace App\Http\Controllers;

use App\Models\RetornoMontagem;
use Illuminate\Http\Request;

class RetornoMontagemController extends Controller
{
    public function index()
    {
        return RetornoMontagem::with('referencia')->orderBy('created_at', 'desc')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'referencia_id' => 'required|exists:referencias,id',
            'num_omr'       => 'required|string',
            'num_pedido'    => 'required|string',
            'qtd_pecas'     => 'required|integer|min:1',
            'qtd_caixas'    => 'required|integer|min:1',
            'responsavel'   => 'required|string',
        ]);

        $retorno = RetornoMontagem::create($request->all());
        return response()->json($retorno->load('referencia'), 201);
    }

    public function destroy($id)
    {
        RetornoMontagem::findOrFail($id)->delete();
        return response()->json(['success' => true]);
    }
}
