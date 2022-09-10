import React from 'react'
// import WorkImg from '../assets/workImg.jpeg'



const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#1D1438]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#ADFFD9] border-[#FF8552]'>Work</p>
                <p className='py-6 text-[#297373]'>Check out some of my recent work.</p>
            </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='shadow-md shadow-[#170A1F] group container rounded-md flex justify-center items-center mx-auto content-div'>
                
                {/*Hover Effects*/}
                <div>
                    <span>

                    </span>
                    <div>
                        <a href="/">
                            <button></button>
                        </a>
                        <a href="/">
                            <button></button>
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