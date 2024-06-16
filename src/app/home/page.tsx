import NavBar from '@/components/home/nav-bar'
import TrendingCards from '@/components/home/trending-cards'
import React from 'react'

export default function page() {
  return (
    <div>
      <NavBar />

      <TrendingCards />

      <footer className="bg-neutral-900 text-[#E9E9E9] py-2 text-sm">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Made by <span className='text-purple-500 font-semibold'>KUKIS</span> and <span className='text-purple-500 font-semibold'>AD</span>. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
