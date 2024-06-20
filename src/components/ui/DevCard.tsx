"use client";

import Image from "next/image";
import React, { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';
import { BackgroundGradient } from "@/components/ui/background-gradient";

const tech_stack = ["React", "MySQL", "Angular", "Node", "Java", "Redux"];

interface DevCardProps {
	borderColor: string;
}

const DevCard: React.FC<DevCardProps> = ({ borderColor }) => {
	const ref = useRef<HTMLDivElement>(null);

	console.log("DevCard",borderColor)
	const onButtonClick = useCallback(() => {
			if (ref.current === null) {
					return;
			}

			toPng(ref.current, { cacheBust: true })
					.then((dataUrl) => {
							const link = document.createElement('a');
							link.download = 'devcard.png';
							link.href = dataUrl;
							link.click();
					})
					.catch((err) => {
							console.log(err);
					});
	}, [ref]);

	return (
		<div className="flex items-center justify-center dark flex-col gap-4 min-h-screen w-full z-30 relative max-lg:scale-75 max-md:scale-50">
			<div ref={ref} className="relative">
				<div className="absolute z-50 -top-4 left-32">
					<button className="p-[2px] relative">
						<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
						<div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
							<p className="font-bold text-[#fff]">De<span className="text-[#E568FA]">v</span><span className="">Deck</span></p>
						</div>
					</button>
				</div>
				<BackgroundGradient className="overflow-hidden relative rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900" borderColor={borderColor}>

					{/*//^ CUSTOM BG IMAGE */}
					{/* <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}

					{/* <div className="absolute inset-0 -z-10 h-full w-full bg-black"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div><div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]"></div></div> */}

					<div className="absolute inset-0 -z-10 h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>

					{/* <div className="absolute inset-0 -z-20 h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> */}
					{/*//^ CUSTOM BG IMAGE */}

					<div className="absolute -bottom-20 -left-20 opacity-40 grayscale-1 z-0 h-full w-full">
						<Image
							src={`/react.png`}
							alt="jordans"
							height="1600"
							width="1500"
							className="object-contain w-full h-full"
						/>
					</div>


					<div className="flex items-center gap-4">
						<div className="border border-slate-600 rounded-full">
							<svg
								viewBox="0 0 34 32"
								fill="#08D9FF"
								height="3em"
								width="3em"
							>
								<path
									fill="#08D9FF"
									d="M19.314 15.987a2.392 2.392 0 11-4.784 0 2.392 2.392 0 014.784 0z"
								/>
								<path
									fill="#08D9FF"
									d="M16.922 24.783c1.878 1.826 3.729 2.906 5.221 2.906.489 0 .952-.103 1.337-.334 1.337-.772 1.826-2.701 1.363-5.453-.077-.489-.18-.977-.309-1.492.514-.154.977-.309 1.44-.463 2.598-1.003 4.038-2.392 4.038-3.909 0-1.543-1.44-2.932-4.038-3.909-.463-.18-.926-.334-1.44-.463.129-.514.232-1.003.309-1.492.437-2.803-.051-4.758-1.389-5.53-.386-.231-.849-.334-1.337-.334-1.466 0-3.344 1.08-5.221 2.906-1.852-1.826-3.704-2.906-5.195-2.906-.489 0-.952.103-1.337.334-1.337.772-1.826 2.701-1.363 5.453.077.489.18.977.309 1.492-.514.154-.977.309-1.44.463-2.598 1.003-4.038 2.392-4.038 3.909 0 1.543 1.44 2.932 4.038 3.909.463.18.926.334 1.44.463a16.882 16.882 0 00-.309 1.492c-.437 2.752.051 4.707 1.363 5.453.386.232.849.334 1.337.334 1.492.051 3.344-1.029 5.221-2.829zm-1.441-3.472c.463.026.952.026 1.44.026s.977 0 1.44-.026a24.523 24.523 0 01-1.44 1.723 24.252 24.252 0 01-1.44-1.723zm-3.189-2.649c.257.437.489.849.772 1.26a27.786 27.786 0 01-2.263-.386c.232-.694.489-1.415.797-2.135.206.411.437.849.694 1.26zM10.8 12.463c.72-.154 1.466-.283 2.263-.386-.257.412-.514.823-.772 1.26s-.489.849-.694 1.286a17.109 17.109 0 01-.797-2.161zm1.415 3.524c.334-.694.694-1.389 1.106-2.083.386-.669.823-1.337 1.26-2.006a35.293 35.293 0 014.682 0c.463.669.874 1.337 1.26 2.006.412.694.772 1.389 1.106 2.083a26.922 26.922 0 01-1.106 2.083c-.386.669-.823 1.337-1.26 2.006a35.293 35.293 0 01-4.682 0 28.695 28.695 0 01-1.26-2.006 27.106 27.106 0 01-1.106-2.083zm10.057-1.389l-.694-1.286c-.257-.437-.489-.849-.772-1.26.797.103 1.543.232 2.263.386-.231.72-.489 1.44-.797 2.161zm0 2.778c.309.72.566 1.44.797 2.135-.72.154-1.466.283-2.263.386.257-.412.514-.823.772-1.26.232-.386.463-.823.694-1.26zm.591 8.925c-.206.129-.463.18-.746.18-1.26 0-2.829-1.029-4.372-2.572a26.868 26.868 0 002.186-2.701 23.619 23.619 0 003.447-.54c.129.463.206.926.283 1.389.36 2.186.077 3.755-.797 4.244zm1.338-13.555c2.881.823 4.604 2.083 4.604 3.241 0 1.003-1.183 2.006-3.266 2.804-.412.154-.874.309-1.337.437a27.01 27.01 0 00-1.26-3.241c.514-1.106.952-2.186 1.26-3.241zm-2.058-7.253c.283 0 .514.051.746.18.849.489 1.157 2.032.797 4.244-.077.437-.18.9-.283 1.389a33.072 33.072 0 00-3.447-.54 23.774 23.774 0 00-2.186-2.701c1.543-1.518 3.112-2.572 4.372-2.572zm-3.781 5.17c-.463-.026-.952-.026-1.44-.026s-.977 0-1.44.026c.463-.617.952-1.183 1.44-1.723.489.54.977 1.132 1.44 1.723zm-7.382-4.99c.206-.129.463-.18.746-.18 1.26 0 2.829 1.029 4.372 2.572a26.756 26.756 0 00-2.186 2.701 23.619 23.619 0 00-3.447.54c-.129-.463-.206-.926-.283-1.389-.36-2.186-.077-3.729.797-4.244zM9.643 19.228c-2.881-.823-4.604-2.083-4.604-3.241 0-1.003 1.183-2.006 3.266-2.803.412-.154.874-.309 1.337-.437a27.01 27.01 0 001.26 3.241c-.514 1.106-.952 2.212-1.26 3.241zm.54 2.829c.077-.437.18-.9.283-1.389 1.08.232 2.238.412 3.447.54a23.774 23.774 0 002.186 2.701c-1.543 1.517-3.112 2.572-4.372 2.572-.283 0-.514-.051-.746-.18-.875-.489-1.157-2.058-.797-4.244z"
								/>
							</svg>
						</div>


						<p className="text-xl font-semibold sm:text-xl text-black  dark:text-neutral-200">@adrianvargas</p>
					</div>

					<br /><br /><br /><br /><br />

					<div className="z-10 absolute top-14 -right-16">
						<div className="relative">
							<div className=" bg-gradient-to-b from-transparent to-black rounded-full z-30 h-full w-full absolute"></div>
							<Image
								src={`/adrian.jpg`}
								alt="jordans"
								height="250"
								width="250"
								className="object-contain rounded-full border-4 border-[#5db2a9]"
							/>
						</div>
					</div>

					<p className="z-40 relative font-semibold text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
						Senior Software Engineer
					</p>

					<div className="bg-[#00091D] p-4 w-full rounded">
						<p className="z-40 relative text-sm text-neutral-600 dark:text-neutral-400">
							Build fast, fail fast ⚡
						</p>
					</div>


					<div className="flex flex-wrap gap-1 mt-4">
						{
							tech_stack.map(item => (
								<button key={item} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
									<span className="absolute inset-0 overflow-hidden rounded-full">
										<span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
									</span>
									<div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
										<span>
											{item}
										</span>
									</div>
									<span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
								</button>
							))
						}
					</div>


					<div className="flex gap-4 mt-4">
						<div className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg flex items-center gap-2">
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

						<div className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold hover:bg-black/[0.8] hover:shadow-lg flex items-center gap-2">
							<button >
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

				</BackgroundGradient>
			</div>


			<div className="flex items-center gap-4">
				<button onClick={onButtonClick} className="inline-flex gap-4 h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
					Download

					<svg fill="none" viewBox="0 0 24 24" height="1.5em" width="1.5em" >
						<path
							fill="currentColor"
							d="M11 5a1 1 0 112 0v7.158l3.243-3.243 1.414 1.414L12 15.986 6.343 10.33l1.414-1.414L11 12.158V5z"
						/>
						<path
							fill="currentColor"
							d="M4 14h2v4h12v-4h2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4z"
						/>
					</svg>
				</button>

				<div
					className="inline-flex gap-4 h-12 items-center justify-center rounded-md border border-slate-800 bg-[#000103]/50 px-6 font-medium text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
					<div className="flex gap-1">
						<span>Copy link</span>
					</div>
					<span className="flex text-gray-800 cursor-pointer w-5 h-5 hover:text-gray-400 duration-200">
						<svg className="fill-current" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 115.77 122.88"><g><path className="st0" d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z" /></g></svg>
					</span>
				</div>

			</div>
		</div>
	)
}

export default DevCard;