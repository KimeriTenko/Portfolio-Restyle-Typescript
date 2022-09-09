import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/FoxIcon.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1D1438] text-[#E6E6E6]'>
        <div>
          <img src={Logo} alt="Logo" style={{width: '50px'}} />
        </div>

      {/*Menu*/}
        <div>
          <ul className='flex'>
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>

      {/*Hamburger Menu*/}
        <div className='hidden'>
          <FaBars />
        </div>

      {/*Mobile Menu*/}
      <ul className='hidden'>
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Navbar