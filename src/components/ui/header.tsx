import Link from 'next/link'
import React from 'react'

export default function Header() {
	return (
		<header className="flex justify-center align-center fixed top-4 max-w-4xl container border-slate-300/50 rounded-full border w-full backdrop-filter backdrop-blur-lg bg-opacity-90">
			<nav className="backdrop-filter backdrop-blur-lg w-full">
				<div className="max-w-5xl mx-auto px-4">
					<div className="flex items-center justify-between h-12">
						<span className="text-lg text-slate-100 font-semibold">
							De<span className='text-purple-500'>v</span>Deck
						</span>
						<div className="flex items-center space-x-4 text-sm text-slate-300">
							<Link className='font-medium' href="/">About</Link>
							<Link className='font-medium' href="/">Features</Link>
							<Link className='font-medium text-purple-500' href="/login">Login</Link>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}
