import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'

export default function FormHeader() {
    return (
        <div className='px-8 py-4 bg-zinc-950'>
            <div className='flex items-center mb-6'>
                <Link href="/home">
                    <ChevronLeftIcon className="size-6 text-[#E568FA]" />
                </Link>
                <h2 className="text-lg font-bold text-slate-300">Create a Card</h2>
            </div>
            <p className="text-sm text-slate-400">Fill out the form below to create a new card with your personal and professional details. You can also create your own card design</p>
        </div>
    )
}
