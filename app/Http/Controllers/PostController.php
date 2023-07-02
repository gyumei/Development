<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; 
use App\Models\Post;
use Inertia\Inertia;

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
}
