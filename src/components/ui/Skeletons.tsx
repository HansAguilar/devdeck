import { cn } from '@/utils/cn'
import React from 'react'

export const CardSkeleton = () => {
    return (
        <>
            <div>
                <h1 className='text-slate-300 font-bold text-2xl my-4'>Most Popular Cards 🔥</h1>
                <div className='flex justify-between w-full gap-4 border '>
                    <CardsSkeleton />
                    <CardsSkeleton />
                    <CardsSkeleton />
                    <CardsSkeleton />
                </div>

            </div>

            <div className='mt-6'>
                <h1 className='text-slate-300 font-bold text-2xl my-4 '>Recent</h1>
                <div className='flex justify-between w-full gap-4 border '>
                    <CardsSkeleton />
                    <CardsSkeleton />
                    <CardsSkeleton />
                    <CardsSkeleton />
                </div>
            </div>
        </ >
    )
}

const CardsSkeleton = ({ className }: { className?: string }) => {
    return (
        <div className={cn("animate-pulse bg-zinc-700 rounded-md md:flex-wrap w-72", className)}>
            <div className='flex gap-4 items-center'>
                <div className="h-7 w-9 rounded-full" />
                <div className="h-4 w-full rounded-md" />
            </div>

            <div className='flex flex-col gap-2 mt-14'>
                <div className="h-4 w-full rounded-md" />
                <div className="h-4 w-10/12 rounded-md mr-auto" />
            </div>

            <div className='flex gap-2'>
                <div className="h-4 w-4 rounded-md" />
                <div className="h-4 w-4 rounded-md" />
                <div className="h-4 w-4 rounded-md" />
                <div className="h-4 w-4 rounded-md" />
            </div>
        </div>
    )
}