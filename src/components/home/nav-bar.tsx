import React from 'react'
import { MagnifyingGlassIcon, PlusIcon, XMarkIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';

export default function NavBar() {
    const inputStyle = `flex h-10 w-80 border-none bg-gray-50 dark:bg-neutral-700/70 text-black dark:text-white shadow-input rounded-md p-3 text-sm file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-[#A855F7]
          disabled:cursor-not-allowed disabled:opacity-50
          dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
          group-hover/input:shadow-none transition duration-400`;

    return (
        <div className='fixed top-0 w-full bg-neutral-900 p-4 text-[#E9E9E9] dark'>
            <div className='flex items-center justify-between'>
                <span className="text-2xl text-slate-100 font-semibold">
                    De<span className='text-purple-500'>v</span>Deck
                </span>

                <div className={`relative w-96 max-sm:hidden`}>
                    <input
                        className="appearance-none bg-neutral-700/70 border-2 pl-10 border-neutral-800 hover:border-neutral-700 transition-colors rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:ring-purple-600 focus:border-purple-600 focus:shadow-outline text-white"
                        id="username"
                        type="text"
                        placeholder="Search..."
                    />
                    <div className="absolute right-0 inset-y-0 flex items-center">
                        <XMarkIcon className='mr-3 size-6 text-gray-400 hover:text-gray-500' />
                    </div>

                    <div className="absolute left-0 inset-y-0 flex items-center">
                        <MagnifyingGlassIcon className='ml-3 size-5 text-gray-400 hover:text-gray-500' />
                    </div>
                </div>

                <div className='cursor-pointer gap-2 flex items-center px-4 py-1.5 bg-neutral-700/70 text-white rounded-md font-semibold border-2 border-neutral-800 hover:border-neutral-700'>
                    <PlusIcon className='size-5 text-gray-400' />
                    <Link href="/home/create" className="outline-none border-none appearance-none">
                        Create
                    </Link>
                </div>
            </div>
        </div>
    )
}
