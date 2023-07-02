import React from "react";
import { Link } from '@inertiajs/react';

export default function Header({auth, children}) {
    return (
        <header class="md:flex justify-between bg-black p-24">
            <div class="text-4xl font-bold text-green-800 pl-2">
                  <a href="/index">Collision</a>
                </div>
            <nav>
                <ul class="sm:flex md:flex justify-end md:space-x-16 pr-8 text-green-800">
                {auth.user ? (
                <>
                    <li><Link href="/profiele">プロフィール</Link></li>
                    <li><Link href="/follow">フォロー中</Link></li>
                    <li><Link href="/follower">フォロワー</Link></li>
                    <li><Link href="/like">お気に入り</Link></li>
                    <li><Link href="/debate">論議場</Link></li>
                    <li><Link href={route('logout')} method="post">ログアウト</Link></li>
                </>
                ) : (
                <>
                    <li><Link href={route('register')}>新規登録</Link></li>
                    <li><Link href={route('login')}>ログイン</Link></li>
                    <li><Link href="/debate">Googleでログイン</Link></li>
                    <li><Link href="/debate">Twitterでログイン</Link></li>
                </>
                )}
                </ul>
            </nav>
        </header>
            )
}

