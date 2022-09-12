import React from 'react'
import Breakout from '../assets/Breakout.png'
import MrMandibles from '../assets/MrMandibles.png'
import ButtercupBurrow from '../assets/ButtercupBurrow.png'
// import Routes from '../assets/Routes.jpeg'
import Portfolio from '../assets/Portfolio.png'




const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#1D1438]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#ADFFD9] border-[#FF8552]'>Work</p>
                <p className='py-6 text-[#297373]'>Check out some of my recent work.</p>
            </div>
                                                                                                  
        {/*Container*/}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

            {/*Grid Item*/}
            <div style={{backgroundImage: `url(${MrMandibles})`}} 
            className='shadow-md shadow-[#FF220C] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-[#F7F2F7] tracking-wider'>
                    React JS, Tailwind CSS
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#89568A] text-[#FF8552] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#89568A] text-[#FF8552] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            {/*Grid Item*/}
            <div style={{backgroundImage: `url(${Breakout})`}} 
            className='shadow-md shadow-[#FF220C] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-[#F7F2F7] tracking-wider'>
                    Javascript, CSS, HTML5
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#89568A] text-[#FF8552] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#89568A] text-[#FF8552] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            {/*Grid Item*/}
            <div style={{backgroundImage: `url(${ButtercupBurrow})`}} 
            className='shadow-md shadow-[#FF220C] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-[#F7F2F7] tracking-wider'>
                    React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#89568A] text-[#FF8552] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#89568A] text-[#FF8552] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            {/*Grid Item*/}
            <div style={{backgroundImage: `url(${MrMandibles})`}} 
            className='shadow-md shadow-[#FF220C] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-[#F7F2F7] tracking-wider'>
                    React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#89568A] text-[#FF8552] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#89568A] text-[#FF8552] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            {/*Grid Item*/}
            <div style={{backgroundImage: `url(${MrMandibles})`}} 
            className='shadow-md shadow-[#FF220C] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-[#F7F2F7] tracking-wider'>
                    React JS Application
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#89568A] text-[#FF8552] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#89568A] text-[#FF8552] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            {/*Grid Item*/}
            <div style={{backgroundImage: `url(${Portfolio})`}} 
            className='shadow-md shadow-[#FF220C] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/*Hover Effects*/}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-[#F7F2F7] tracking-wider'>
                      React JS, Tailwind CSS
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#89568A] text-[#FF8552] font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#89568A] text-[#FF8552] font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Work