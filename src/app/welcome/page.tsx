"use client"
import React, { useState } from 'react';
import { ResizableBox } from 'react-resizable'; 
import CreateCard from '@/components/ui/CreateCard';
import DevCard from '@/components/ui/DevCard';
import 'react-resizable/css/styles.css'; 

const resizeHandleStyle = {
  width: '10px',
  background: '#2d3748',
  cursor: 'col-resize',
  zIndex: 1,
};

const Page: React.FC = () => {
  const [width, setWidth] = useState<number>(600); 

  const onResize = (event: any, { size }: { size: { width: number; height: number; } }) => {
    setWidth(size.width);
  };

  const isColumnLayout = width < 400; 

  return (
    <div className='relative min-h-screen w-full dark overflow-hidden'>
      <div className="absolute -z-10 h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>
      
      <div className='flex min-h-screen justify-between w-full max-sm:flex-col'>
        <ResizableBox
          className='border-r-4 border-slate-600 bg-zinc-900'
          width={width}
          height={Infinity}
          handle={<div style={resizeHandleStyle} className='absolute top-0 bottom-0 -right-2' />}
          onResize={onResize}
          minConstraints={[300, Infinity]} // Minimum width for resizable pane
          maxConstraints={[1000, Infinity]} // Maximum width for resizable pane
        >
          <CreateCard isColumnLayout={isColumnLayout} />
        </ResizableBox>

        <div className='w-full max-sm:w-full'>
          <DevCard />
        </div>
      </div>
    </div>
  );
};

export default Page;
