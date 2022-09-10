import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1D1438]'>
        {/* Container */} 
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#FF8552]'>Hello, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ADFFD9]'>Mary Frye</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#F7F2F7]'>I'm a full stack developer.</h2>
            <p className='text-[#F7F2F7] py-4 max-w-[700px]'>I'm a full stack developer focused on creating and designing exceptional digital experiences. Currently, I'm focused on building responsive full-stack web applications.</p>
        <div>
            <button className='text-[#FF8552] group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#297373] hover:border-[#85FFC7]'>
                    View Work 
                <span className='group-hover:rotate-90 duration-300'>
                    <HiArrowNarrowRight className='ml-3' />
                </span>
            </button>
        </div>
    </div>
</div>
  );
};

export default Home