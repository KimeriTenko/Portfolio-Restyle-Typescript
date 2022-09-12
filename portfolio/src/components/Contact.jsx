import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1D1438] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/a70a605b-598c-4e64-9c7e-3d6f8717c127" className='flex flex-col max-w-[600px] w-full'>    
            <div className='pb-8'>
                <p className='text-4xl text-[#ADFFD9] font-bold inline border-b-4 border-[#FF8552]'>Contact</p>
                <p className='text-[#E6E6E6] pt-4'>Submit the form below or send me an email:</p>
                <p className='text-[#FF8552] pt-1'>themaryfrye@gmail.com</p>
            </div>
            <input className='bg-[#E7D9E7] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#E7D9E7]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#E7D9E7] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#FF8552] border-2 hover:bg-[#297373] hover:border-[#85FFC7] px-4 my-8 py-3 pt-2 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
        )
      }

export default Contact