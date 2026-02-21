<?php

namespace App\Http\Controllers;

use App\Models\Referencia;
use Illuminate\Http\Request;

class ReferenciaController extends Controller
{
    public function index()
    {
        return Referencia::all();
    }

    public function store(Request $request)
    {
        $referencia = Referencia::create($request->all());
        return response()->json($referencia, 201);
    }

    public function update(Request $request, $id)
    {
        $referencia = Referencia::findOrFail($id);
        $referencia->update($request->all());
        return response()->json($referencia);
    }

    public function destroy($id)
    {
        Referencia::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}