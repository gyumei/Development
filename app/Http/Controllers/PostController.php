<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; 
use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


class PostController extends Controller
{
    public function index(User $user)
    {
        return Inertia::render("Post/Index",["users" => $user->get()]);
    }
    
    public function personal(User $user)
    {
        return Inertia::render("Post/Personal", ["user" => $user]);
    }
    
    public function profiele_enroll()
    {
        return Inertia::render("Post/Profiele_enroll");
    }
    
    public function profiele()
    {
        $userId = Auth::id();
        $identified_person = User::where('id', '=', $userId)->first();
        return Inertia::render("Post/Profiele", ["id_person" => $identified_person]);
    }
}
