"use client";
import React, { useState, useEffect } from 'react';
import CreateCard from '@/components/ui/CreateCard';
import DevCard from '@/components/ui/DevCard';

const Page: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [isSidebarFullyOpen, setIsSidebarFullyOpen] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (!isSidebarOpen) {
      setIsSidebarFullyOpen(false);
    }
  }, [isSidebarOpen]);

  return (
    <div className='relative min-h-screen w-full dark overflow-hidden'>
      <div className="absolute -z-10 h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      <div className='flex flex-col sm:flex-row min-h-screen w-full relative'>
        <div 
          className={`transition-all duration-300 ${isSidebarOpen ? 'w-full sm:w-1/3' : 'w-0 sm:w-0'} border-b-8 sm:border-b-0 sm:border-r-8 border-slate-600 bg-zinc-900 relative`}
          onTransitionEnd={() => {
            if (isSidebarOpen) {
              setIsSidebarFullyOpen(true);
            }
          }}
        >
          {isSidebarOpen && isSidebarFullyOpen && <CreateCard />}
          <button 
            onClick={toggleSidebar} 
            className={`absolute top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded hidden sm:block ${isSidebarOpen ? 'right-[-30px]' : 'right-[-35px]'} text-lg hover:bg-gray-600 hover:text-gray-100`}
          >
            {isSidebarOpen ? <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg> :
             <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008" stroke="#ffffff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>}
          </button>

        </div>

        <div className='flex-1 w-full'>
          <DevCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
