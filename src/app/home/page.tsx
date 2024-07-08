import NavBar from '@/components/home/nav-bar'
import TrendingCards from '@/components/home/trending-cards'
import { CardSkeleton } from '@/components/ui/Skeletons'
import React, { Suspense } from 'react'

export default function page() {
  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_2px,transparent_2px)] bg-[size:70px_40px]">
        <div className="absolute right-72 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-700 opacity-40 blur-[100px]"></div>
        <div className="absolute left-0 right-96 bottom-32 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-700 opacity-40 blur-[100px]"></div>
      </div>
      <NavBar />

      <section className='py-20 lg:max-w-7xl max-xl:container m-auto max-sm:px-4'>
        <CardSkeleton />
        {/* <Suspense fallback={<CardSkeleton />}>
          <TrendingCards />
        </Suspense> */}
      </section>

      <footer className="bg-neutral-900 text-[#E9E9E9] py-2 text-sm">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Made by <span className='text-purple-500 font-semibold'>KUKIS</span> and <span className='text-purple-500 font-semibold'>AD</span>. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
