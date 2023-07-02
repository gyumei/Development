import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';
import Header from '@/Components/Post/Header'

const Profiele = (props) => {
    
    return (
        <>
        <Header auth={props.auth}>
           Collisions
        </Header>
        <div class="bg-grey-500 pb-6 sm:pb-8 lg:pb-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
          
            <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
        
              <div class="flex ml-48 flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
              
                <p class="mb-8 font-semibold text-grey-500 md:mb-6 md:text-lg xl:text-xl">名前: </p>
        
                <p class="mb-8 font-semibold text-grey-500 md:mb-6 md:text-lg xl:text-xl">年齢: </p>
                
                <p class="mb-8 font-semibold text-grey-500 md:mb-6 md:text-lg xl:text-xl">メールアドレス: </p>
                
                <p class="mb-8 font-semibold text-grey-500 md:mb-6 md:text-lg xl:text-xl">趣味: </p>
                
                <p class="mb-8 font-semibold text-grey-500 md:mb-6 md:text-lg xl:text-xl">興味のあるトピック: </p>
                
                <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                  <a href="/profiele/enroll" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">登録</a>
        
                  <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">編集</a>
              </div>
              
              </div>
        
              <div class="h-48 my-16 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
                <img src="https://images.unsplash.com/photo-1618004912476-29818d81ae2e?auto=format&q=75&fit=crop&w=1000" loading="lazy" alt="Photo by Fakurian Design" class="h-full w-full object-cover object-center" />
              </div>
            </section>
          </div>
        </div>
        </>
        );
}

export default Profiele;

