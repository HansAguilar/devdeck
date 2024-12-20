"use client";
import React, { useState, useEffect } from 'react';
import CreateCard from '@/components/ui/CreateCard';
import DevCard from '@/components/ui/DevCard';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

const Page: React.FC = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
	const [isSidebarFullyOpen, setIsSidebarFullyOpen] = useState<boolean>(true);
	const [borderColor, setBorderColor] = useState<string>("");
	const [theme, setTheme] = useState<React.ReactNode>();

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	useEffect(() => {
		if (!isSidebarOpen) {
			setIsSidebarFullyOpen(false);
		}
	}, [isSidebarOpen]);

	const [name, setName] = useState("");
	const [title, setTitle] = useState("");
	const [bio, setBio] = useState("");
	const [profilePic, setProfilePic] = useState<string | null>(null);
	const [logo, setLogo] = useState<string | null>(null);
	const [techStack, setTechStack] = useState<string[]>([]);

	return (
		<div className='relative min-h-screen w-full dark overflow-hidden'>
			<div className="absolute -z-10 h-full w-full bg-slate-950">
				<div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
				<div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
			</div>

			<div className='flex min-h-screen justify-between w-full max-sm:flex-col relative'>
				<div className={`transition-all duration-300 ${isSidebarOpen ? 'w-full sm:w-2/4' : 'w-0 sm:w-0'} border-b-8 sm:border-b-0 sm:border-r-8 border-slate-600 bg-zinc-900 relative`}
					onTransitionEnd={() => {
						if (isSidebarOpen) {
							setIsSidebarFullyOpen(true);
						}
					}}
				>
					{isSidebarOpen && isSidebarFullyOpen && <CreateCard 
						setBorderColor={setBorderColor} 
						setTheme={setTheme} 
						setName={setName} 
						setTitle={setTitle} 
						setBio={setBio}
						setProfilePic={setProfilePic}
						setLogo={setLogo}
						onTagsChange={setTechStack}
					/>}

					<button
						onClick={toggleSidebar}
						className={`absolute cursor-pointer top-1/2 transform -translate-y-1/2 p-1 bg-gray-700 text-white z-50 rounded hidden sm:block ${isSidebarOpen ? 'right-[-20px]' : 'right-[-25px]'} text-lg hover:bg-gray-600 hover:text-gray-100`}
					>
						{
							isSidebarOpen ?
								<ChevronLeftIcon className="size-6" />
								:
								<ChevronRightIcon className="size-6" />
						}
					</button>
				</div>

				<div className='w-full overflow-y-auto'>
					<DevCard borderColor={borderColor} Theme={theme} name={name} title={title} bio={bio} profilePic={profilePic} logo={logo} techStack={techStack}/>
				</div>
			</div>
		</div>
	);
};

export default Page;
