<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Pet;

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

    public function getPetsFromCustomer(Request $request)
    {
        $customerId = $request->input('customer_id');
        $results = Pet::where('fk_pet_owner_id', $customerId)->get();
        return response()->json($results);
    }
}
