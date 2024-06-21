"use client";

import React, { useRef } from 'react';
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { createUser } from '@/lib/actions';
import { useFormState } from 'react-dom';

const inputStyle = `flex h-12 w-full border-none bg-gray-50 dark:bg-[#0A0E15] text-black dark:text-white shadow-input rounded-md p-4 text-lg file:border-0 file:bg-transparent 
file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-[#A855F7]
disabled:cursor-not-allowed disabled:opacity-50
dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
group-hover/input:shadow-none transition duration-400`;

export default function LoginForm() {
	const initialState = { message: "", errors: {} };
	const [state, dispatch] = useFormState(createUser, initialState);

	const ref = useRef<HTMLDivElement>(null)
	const handleCreateAccount = () => {
		return ('')
	}

	return (
		<div className="flex items-center justify-center dark flex-col gap-6 min-h-screen w-full z-30 relative max-lg:scale-75 max-md:scale-50">
			<div ref={ref} className="relative w-full sm:w-1/2 md:w-1/3">
				<BackgroundGradient className="overflow-hidden relative rounded-[22px] max-w-3xl p-6 sm:p-12 bg-white dark:bg-zinc-900" borderColor='#38BAF8' >
					<p className="font-bold text-[#fff] text-3xl text-center">
						De<span className="text-[#E568FA]">v</span><span>Deck</span>
					</p>

					<div className="absolute inset-0 -z-10 h-full w-full bg-slate-950">
						<div className="absolute bottom-0 left-0 right-0 top-0 bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
					</div>
					<div className="space-y-6 pt-6">
						<h4 className="text-2xl font-bold text-center  text-[#fff]">Login</h4>
						<p className="text-sm text-slate-400 mb-8">
							Welcome back! Please enter your credentials to access your account.
						</p>
						<form className="space-y-6" action={dispatch}>
							<div className="flex flex-col">
								<div>
									<label className="mb-3 mt-5 block text-sm font-medium text-slate-200" htmlFor="username">Username</label>
									<input
										className={inputStyle}
										id="username"
										type="text"
										name="username"
										placeholder="@example"
										maxLength={30}
										required
										aria-describedby="username-error"
									/>

									{/*//! error handling */}
									<div id="username-error" aria-live="polite" aria-atomic="true">
										{state.errors?.username &&
											state.errors.username.map((error: string) => (
												<p className="mt-2 text-sm text-red-500" key={error}>
													{error}
												</p>
											))}
									</div>
									{/*//! error handling */}
								</div>
								<div>
									<label className="mb-3 mt-5 block text-sm font-medium text-slate-200" htmlFor="password">Password</label>
									<input
										className={inputStyle}
										id="password"
										type="password"
										name="password"
										placeholder="password here"
										required
										aria-describedby="password-error"
									/>
									{/*//! error handling */}
									<div id="password-error" aria-live="polite" aria-atomic="true">
										{state.errors?.password &&
											state.errors.password.map((error: string) => (
												<p className="mt-2 text-sm text-red-500" key={error}>
													{error}
												</p>
											))}
									</div>
									{/*//! error handling */}
								</div>
							</div>
							<button
								type="submit"
								className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg text-white font-semibold text-lg transition duration-200 hover:bg-gradient-to-r hover:from-violet-500 hover:to-purple-600"
							>
								Login
							</button>

						</form>

						<div className="text-center text-sm text-slate-200">
							<p>Don&apos;t have an account yet?</p>
							<button className="text-[#E568FA] hover:underline focus:outline-none">
								Create one here
							</button>
						</div>
					</div>
				</BackgroundGradient>
			</div>
		</div>
	)
}
