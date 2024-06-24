import SignUpForm from '@/components/signup/SignUpForm'
import React from 'react';

export default function Page() {
  return (
    <div className='relative min-h-screen'>
      <div className="absolute inset-0 -z-10 h-full w-full bg-zinc-950 ">
        <div className="absolute right-72 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-700 opacity-40 blur-[100px]"></div>
        <div className="absolute left-0 right-96 bottom-32 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-purple-700 opacity-40 blur-[100px]"></div>
      </div>

      <SignUpForm />
    </div>
  );
}