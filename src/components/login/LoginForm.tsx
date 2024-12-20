"use client";

import React, { useRef } from 'react';
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { authenticate, loginUser } from '@/lib/actions';
import { useFormState } from 'react-dom';
import SubmitBtn from './SubmitBtn';
import Link from 'next/link';
import { motion } from "framer-motion";
import Image from 'next/image';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';

const inputStyle = `flex w-full border-none bg-gray-50 dark:bg-[#0A0E15] text-black dark:text-white shadow-input rounded-md p-2.5 text-sm file:border-0 file:bg-transparent 
file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-[#A855F7]
disabled:cursor-not-allowed disabled:opacity-50
dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
group-hover/input:shadow-none transition duration-400`;

export default function LoginForm() {
	const initialState = { message: "", errors: {} };
	// const [state, dispatch] = useFormState(loginUser, initialState);
	const ref = useRef<HTMLDivElement>(null)
	const handleCreateAccount = () => {
		return ('')
	}

	const [errorMessage, dispatch] = useFormState(authenticate, undefined);

	return (
		<div className="flex items-center justify-center dark flex-col gap-6 min-h-screen mx-auto w-full z-30 relative ">
			<motion.div initial={{ x: -100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				exit={{ opacity: 0 }} ref={ref} className="relative max-w-md my-28">

				<motion.div initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					exit={{ opacity: 0 }} transition={{ delay: .4 }} className='absolute -top-24'>
					<Image src="/login1.png" priority={true} alt='3d' width={180} height={200} />
				</motion.div>

				<BackgroundGradient className="overflow-hidden relative rounded-[22px] max-w-3xl p-6 bg-white dark:bg-zinc-900" borderColor='#38BAF8'>

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
										placeholder="ex. zebar24"
										maxLength={30}
										// aria-describedby="username-error"
									/>

									{/*//! error handling */}
									{/* <div id="username-error" aria-live="polite" aria-atomic="true">
										{state?.errors?.username &&
											state.errors.username.map((error: string) => (
												<p className="mt-2 text-sm text-red-500" key={error}>
													{error}
												</p>
											))}
									</div> */}
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
										// aria-describedby="password-error"
									/>
									{/*//! error handling */}
									{/* <div id="password-error" aria-live="polite" aria-atomic="true">
										{state?.errors?.password &&
											state.errors.password.map((error: string) => (
												<p className="mt-2 text-sm text-red-500" key={error}>
													{error}
												</p>
											))}
									</div> */}
									{/*//! error handling */}
								</div>
							</div>
							<SubmitBtn />
							<div
								className="flex h-8 items-end space-x-1"
								aria-live="polite"
								aria-atomic="true"
							>
								{errorMessage && (
									<>
										<ExclamationCircleIcon className="h-5 w-5 text-red-500" />
										<p className="text-sm text-red-500">{errorMessage}</p>
									</>
								)}
							</div>
						</form>

						<div className="text-center text-sm text-slate-200">
							<p>Don&apos;t have an account yet?</p>
							<Link href="/signup" className="text-[#E568FA] hover:underline focus:outline-none">
								Create one here
							</Link>
						</div>
					</div>
				</BackgroundGradient>
			</motion.div>
		</div>
	)
}
