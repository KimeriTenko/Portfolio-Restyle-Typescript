import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1D1438] flex justify-center items-center p-4'>
        <form action="" className='flex flex-col max-w-[600px] w-full'>    
            <div className='pb-8'>
                <p className='text-4xl text-[#ADFFD9] font-bold inline border-b-4 border-[#FF8552]'>Contact</p>
                <p className='text-[#E6E6E6] pt-3'>Submit the form below or send me an email: themaryfrye@gmail.com</p>
            </div>
            <input className='bg-[#E7D9E7]' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#E7D9E7]' type="email" placeholder='Email' name='email' />
        </form>
    </div>
  )
}

export default Contact