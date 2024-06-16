import React from 'react'
import Skeleton from '../ui/skeleton'
import { cn } from '@/utils/cn'

export default function TrendingCards() {
	return (
		<section className='my-24 container m-auto max-sm:px-4'>
			<div>
				<h1 className='font-bold text-2xl my-4'>Most Popular Cards 🔥</h1>
				<div className='grid max-lg:grid-cols-3 max-md:grid-cols-2 grid-cols-4 w-full gap-4'>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>

			<div className='mt-6'>
				<h1 className='font-bold text-2xl my-4'>Recent</h1>
				<div className='grid max-lg:grid-cols-3 max-md:grid-cols-2 grid-cols-4 w-full gap-4'>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>

		</section >
	)
}

function Card({ className }: { className?: string }) {
	return (
		<div className={cn("h-72 bg-zinc-800 rounded-md w-full", className)}>
			<div className='flex flex-col gap-6 p-4 w-full'>
				<div className='flex gap-4 items-center'>
					<Skeleton className="h-7 w-9 rounded-full" />
					<Skeleton className="h-4 w-full rounded-md" />
				</div>

				<div className='flex flex-col gap-2 mt-14'>
					<Skeleton className="h-4 w-full rounded-md" />
					<Skeleton className="h-4 w-10/12 rounded-md mr-auto" />
				</div>

				<div className='flex gap-2'>
					<Skeleton className="h-4 w-4 rounded-md" />
					<Skeleton className="h-4 w-4 rounded-md" />
					<Skeleton className="h-4 w-4 rounded-md" />
					<Skeleton className="h-4 w-4 rounded-md" />
				</div>
			</div>
		</div>
	)
}