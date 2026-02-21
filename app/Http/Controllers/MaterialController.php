<?php

namespace App\Http\Controllers;

use App\Models\Material;
use Illuminate\Http\Request;

class MaterialController extends Controller
{
    public function index($referencia_id)
    {
        return Material::where('referencia_id', $referencia_id)->get();
    }

    public function store(Request $request)
    {
        $material = Material::create($request->all());
        return response()->json($material, 201);
    }

    public function update(Request $request, $id)
    {
        $material = Material::findOrFail($id);
        $material->update($request->all());
        return response()->json($material);
    }

    public function destroy($id)
    {
        Material::findOrFail($id)->delete();
        return response()->json(null, 204);
    }
}