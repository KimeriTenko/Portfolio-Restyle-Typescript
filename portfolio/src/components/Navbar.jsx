import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../assets/foxicon.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1D1438] text-[#E6E6E6]'>
        <div>
          <img src={Logo} alt="Logo" style={{width: '70px'}} />
        </div>

      {/*Menu*/}
      <ul className='hidden md:flex'>
        <li>
          <Link to='home' smooth={true} duration={500}>Home</Link></li>
        <li>
          <Link to='about' smooth={true} duration={500}>About</Link></li>
        <li>
          <Link to='skills' smooth={true} duration={500}>Skills</Link></li>
        <li>
          <Link to='work' smooth={true} duration={500}>Work</Link></li>
        <li>
        <Link to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/*Hamburger Menu*/}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

      {/*Mobile Menu*/}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#1D1438] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>    
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='work' smooth={true} duration={500}>Work</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
      </ul>

      {/*Social Icons*/}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0 items-center'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#85FFC7]'>
            <a className='flex justify-between items-center w-full text-[#FF8552]'
             href="https://www.linkedin.com/in/themaryfrye?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BiGFFgAPAS8mSDOoDAE9Jjw%3D%3D">
              Linkedin <FaLinkedin size={30} ></FaLinkedin>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#297373]'>
            <a className='flex justify-between items-center w-full text-[#FF8552]'
             href="https://github.com/KimeriTenko">
              Github <FaGithub size={30} ></FaGithub>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#89568A]'>
            <a className='flex justify-between items-center w-full text-[#FF8552]'
             href="mailto:themaryfrye@gmail.com">
              Email <HiOutlineMail size={30} ></HiOutlineMail>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#E04300]'>
            <a className='flex justify-between items-center w-full text-[#FF8552]'
             href="/">
              Resume <BsFillPersonLinesFill size={30} ></BsFillPersonLinesFill>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar