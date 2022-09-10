import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1D1438] text-[#ADFFD9]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#FF8552]'>About</p> 
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='text-[#297373] sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Mary, nice to meet you. Please take a look around.</p>
          </div>
          <div className='text-[#E7D9E7] text-2xl'>
            <p>
              I'm passionate about melding excellent design with clean and efficient code to meet the needs of individuals and businesses alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About