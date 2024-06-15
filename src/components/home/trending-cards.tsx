import React from 'react'

export default function TrendingCards() {
    return (
        <section className='mt-24 container m-auto'>
            <div>
                <h1 className='font-bold text-2xl my-4'>Most Popular Cards 🔥</h1>
                <div className='flex items-center justify-between'>
                    <div className='w-full'>
                        <div className='h-60 w-72 bg-zinc-700'></div>
                        <div className='h-28 w-72 bg-zinc-800'></div>
                    </div>
                    <div className='w-full'>
                        <div className='h-60 w-72 bg-zinc-700'></div>
                        <div className='h-28 w-72 bg-zinc-800'></div>
                    </div>
                    <div className='w-full'>
                        <div className='h-60 w-72 bg-zinc-700'></div>
                        <div className='h-28 w-72 bg-zinc-800'></div>
                    </div>
                    <div className='w-full'>
                        <div className='h-60 w-72 bg-zinc-700'></div>
                        <div className='h-28 w-72 bg-zinc-800'></div>
                    </div>
                </div>
            </div>

            <div className='mt-6'>
                <h1 className='font-bold text-2xl my-4'>Recent</h1>
                <div className='flex items-center justify-between'>
                    <div>
                        <div className='h-60 w-72 bg-zinc-700'></div>
                        <div className='h-28 w-72 bg-zinc-800'></div>
                    </div>
                    <div>
                        <div className='h-60 w-72 bg-zinc-700'></div>
                        <div className='h-28 w-72 bg-zinc-800'></div>
                    </div>
                    <div>
                        <div className='h-60 w-72 bg-zinc-700'></div>
                        <div className='h-28 w-72 bg-zinc-800'></div>
                    </div>
                    <div>
                        <div className='h-60 w-72 bg-zinc-700'></div>
                        <div className='h-28 w-72 bg-zinc-800'></div>
                    </div>
                </div>
            </div>

        </section>
    )
}
