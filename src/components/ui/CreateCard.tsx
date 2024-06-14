"use client"

import React, { useState } from 'react'

const inputStyle = `flex h-10 w-full border-none bg-gray-50 dark:bg-[#0A0E15] text-black dark:text-white shadow-input rounded-md p-3 text-sm  file:border-0 file:bg-transparent 
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 
          focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-[#A855F7]
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400`;

export default function CreateCard() {
	const [skills, setSkills] = useState([]);

	return (
		<form className='p-8 dark'>
			<div>
				<label className="mb-3 mt-5 block text-xs font-medium text-slate-200" htmlFor="username">Username</label>
				<input
					className={inputStyle}
					id="username"
					type="text"
					name="username"
					placeholder="ex. @green_dev"
					required
				/>
			</div>

			<div>
				<label className="mb-3 mt-5 block text-xs font-medium text-slate-200" htmlFor="title">Title</label>
				<input
					className={inputStyle}
					id="title"
					type="text"
					name="title"
					placeholder="ex. frontend developer"
					required
				/>
			</div>

			<div>
				<label className="mb-3 mt-5 block text-xs font-medium text-slate-200" htmlFor="bio">Bio</label>
				<input
					className={inputStyle}
					id="bio"
					type="text"
					name="bio"
					placeholder="ex. An empty search history reveals more than a full one"
					maxLength={30}
					required
				/>
			</div>

			<div>
				<label className="mb-3 mt-5 block text-xs font-medium text-slate-200" htmlFor="skills">Tech Stack</label>
				<input
					className={inputStyle}
					id="skills"
					type="text"
					name="skills"
					required
				/>
			</div>
		</form>
	)
}
