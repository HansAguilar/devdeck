import SignUpForm from '@/components/signup/SignUpForm'
import React from 'react';

export default function Page() {
  return (
    <div className='relative min-h-screen'>
    <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-950 ">
      <div className="absolute right-72 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-700 opacity-40 blur-[100px]"></div>
      <div className="absolute left-0 right-96 bottom-32 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-700 opacity-40 blur-[100px]"></div>
    </div>
    
      <SignUpForm/>

    <footer className="bg-neutral-900 text-[#E9E9E9] py-2 text-sm">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Made by <span className='text-purple-500 font-semibold'>KUKIS</span> and <span className='text-purple-500 font-semibold'>AD</span>. All rights reserved.</p>
      </div>
    </footer>
  </div>
  );
}