<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $query = $request->input('query');
        $results = User::where(function ($queryBuilder) use ($query) {
            $queryBuilder->where('name', 'like', "%$query%")
            ->orWhere('email', 'like', "%$query%")
            ->orWhere('cpf', 'like', "%$query%");
        })
        ->where('role', 'customer')
        ->get();
        return response()->json($results);
    }
}
