import React from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';
import Header from '@/Components/Post/Header'

const Index = (props) => {
  const { users } = props;
    
    return (
        <>
        <Header auth={props.auth}>
        Collision
        </Header>
        <div class="bg-red-800 h-96">
          <div class="text-6xl text-center font-bold text-grey-800 pt-48">
            <p>Collision</p>
          </div>
        </div>
        <div class="bg-white py-6 sm:py-8 lg:py-12">
          <div class="mx-auto max-w-screen-2xl px-4 md:px-8"><div class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                        { users.map((user) => (
                          <div key={user.id}>
                             <div>
                                <Link href={`/personal/${user.id}`} class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
                                <img src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?auto=format&q=75&fit=crop&crop=top&w=600&h=700" loading="lazy" alt="Photo by Austin Wade" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                <div class="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                  <span class="text-gray-500">{ user.id }</span>
                                  <span class="text-gray-500">{ user.name }</span>
                                  <span class="text-lg font-bold text-gray-800 lg:text-xl">Business Causual</span>
                                 </div>
                                </Link>
                              </div>
                          </div>
                      )) }
            </div>
          </div>
        </div>
</>
        );
}

export default Index;