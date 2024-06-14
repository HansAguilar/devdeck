// This is your new page component
import CreateCard from '@/components/ui/CreateCard';
import DevCard from '@/components/ui/DevCard';
import React from 'react';

export default function Page() {
  return (
    <div className='relative min-h-screen w-full dark overflow-hidden'>
      {/* <div className="absolute -z-10 h-full w-full bg-slate-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div> */}
    
      <div className="absolute -z-10 h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
      
      <div className='flex min-h-screen justify-between w-full max-sm:flex-col'>

        {/*//^ FORM LEFT SIDE */}
        <div className='w-2/5 max-sm:w-full border border-slate-600'>
          <CreateCard />
        </div>
        {/*//^ FORM LEFT SIDE */}


        {/*//^ CARD PREVIEW RIGHT SIDE */}
        <div className='w-3/5 max-sm:w-full border border-slate-600'>
          <DevCard />
        </div>
        {/*//^ CARD PREVIEW RIGHT SIDE */}

      </div>

    </div>
  );
}
