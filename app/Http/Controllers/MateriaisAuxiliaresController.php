<?php

namespace App\Http\Controllers;

use App\Models\MaterialAuxiliar;
use Illuminate\Http\Request;

class MateriaisAuxiliaresController extends Controller
{
    public function index()
    {
        return MaterialAuxiliar::orderBy('created_at', 'asc')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'cod_prod'  => 'required|string',
            'cod_erp'   => 'required|string',
            'descricao' => 'required|string',
        ]);

        return MaterialAuxiliar::create($validated);
    }

    public function update(Request $request, MaterialAuxiliar $materiaisAuxiliar)
    {
        $validated = $request->validate([
            'cod_prod'  => 'required|string',
            'cod_erp'   => 'required|string',
            'descricao' => 'required|string',
        ]);

        $materiaisAuxiliar->update($validated);
        return $materiaisAuxiliar;
    }

    public function destroy(MaterialAuxiliar $materiaisAuxiliar)
    {
        $materiaisAuxiliar->delete();
        return response()->noContent();
    }
}
