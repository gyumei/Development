import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";

const Index = (props) => {
    
    return (
        <>
        <header class="md:flex justify-between bg-black p-24">
            <h1 class="pl-8">ロゴ</h1>
            <nav>
                <ul class="sm:flex md:flex justify-end md:space-x-16 pr-8 text-green-800">
                    <li><Link href="/profiele">プロフィール</Link></li>
                    <li><a href="/follow">フォロー中</a></li>
                    <li><a href="/follower">フォロワー</a></li>
                    <li><a href="/like">お気に入り</a></li>
                    <li><a href="/debate">論議場</a></li>
                </ul>
            </nav>
        </header>
        <div class="bg-red-800 h-96">
          <div class="text-6xl text-center font-bold text-grey-800 pt-48">
            <p>Collision</p>
          </div>
        </div>
    <div class="bg-white py-6 sm:py-8 lg:py-12">

      <div>
        <a href="" class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
          <img src="https://images.unsplash.com/photo-1560269999-cef6ebd23ad3?auto=format&q=75&fit=crop&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

          <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
            <span class="text-gray-500">Women</span>
            <span class="text-lg font-bold text-gray-800 lg:text-xl">Sale</span>
          </div>
        </a>
      </div>
</div>
</>
        );
}

export default Index;
