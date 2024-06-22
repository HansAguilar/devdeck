import React from 'react'
import Skeleton from '../ui/skeleton'
import { cn } from '@/utils/cn'
import DevCard from '../ui/DevCard'
import TestCard from './testCard'

export default function TrendingCards() {
	return (
		<section className='py-20 container m-auto max-sm:px-4'>
			<div>
				<h1 className='text-slate-300 font-bold text-2xl my-4'>Most Popular Cards 🔥</h1>
				<div className='grid max-lg:grid-cols-3 max-md:grid-cols-2 grid-cols-4 w-full gap-4'>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>

			<div className='mt-6'>
				<h1 className='text-slate-300 font-bold text-2xl my-4'>Recent</h1>
				<div className='grid max-lg:grid-cols-3 max-md:grid-cols-2 grid-cols-4 w-full gap-4'>
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
    <div className={cn("h-72 bg-zinc-800 rounded-3xl w-full overflow-hidden object-cover relative transition-transform transform hover:scale-105", className)}>

      <div className="absolute inset-0 z-50 bg-gradient-to-b from-transparent to-black flex flex-col justify-end">
				{/* Engagements */}
        <div className="flex gap-4 justify-center">
          <div className="px-8 py-2 text-white text-sm rounded-md font-semibold hover:shadow-lg flex items-center gap-2 transition-transform transform hover:scale-105">
            <button>
              356
            </button>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M923 283.6a260.04 260.04 0 00-56.9-82.8 264.4 264.4 0 00-84-55.5A265.34 265.34 0 00679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 00-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z" />
            </svg>
          </div>
          <div className="px-8 py-2 text-white text-sm rounded-md font-semibold hover:shadow-lg flex items-center gap-2 transition-transform transform hover:scale-105">
            <button>
              1031
            </button>
            <svg
              viewBox="0 0 1024 1024"
              fill="currentColor"
              height="1.5em"
              width="1.5em"
            >
              <path d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" />
            </svg>
          </div>
        </div>

				{/* title */}
        <p className="z-40 relative font-semibold text-base sm:text-xl  text-neutral-200 mt-4 mb-3 dark:text-neutral-200 text-center">
          Senior Software Engineer
        </p>
      </div>
      <div className="relative h-full w-full">
        <div className="h-full w-full overflow-hidden">
				{/*  for now */}
          <TestCard />
        </div>
      </div>
    </div>
  );
	// return (
	// 	<div className={cn("h-72 bg-zinc-800 rounded-md w-full overflow-hidden", className)}>
	
	// 				{/* <div className='flex gap-4 items-center'>
	// 					<Skeleton className="h-7 w-9 rounded-full" />
	// 					<Skeleton className="h-4 w-full rounded-md" />
	// 				</div>

	// 				<div className='flex flex-col gap-2 mt-14'>
	// 					<Skeleton className="h-4 w-full rounded-md" />
	// 					<Skeleton className="h-4 w-10/12 rounded-md mr-auto" />
	// 				</div>

	// 				<div className='flex gap-2'>
	// 					<Skeleton className="h-4 w-4 rounded-md" />
	// 					<Skeleton className="h-4 w-4 rounded-md" />
	// 					<Skeleton className="h-4 w-4 rounded-md" />
	// 					<Skeleton className="h-4 w-4 rounded-md" />
	// 				</div> */}

	// 	</div>
	// )
}