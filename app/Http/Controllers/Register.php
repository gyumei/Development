<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; 
use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;


class PostController extends Controller
{
    protected function create(array $data)
    {
        if (isset($data['icon_image_path'])) {
            $icon_image_path = $data['icon_image_path']->store('img', 'public');
        } else {
            $icon_image_path = "img/profile.jpg"; // nullからimg/profile.jpgに変更
        }
}
