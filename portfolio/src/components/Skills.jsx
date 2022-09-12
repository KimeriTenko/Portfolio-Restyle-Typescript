import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Redux from '../assets/redux.png';
import Node from '../assets/node.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';
import Mongo from '../assets/mongo.png';
import Heroku from '../assets/heroku.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#1D1438]'>
    {/*Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#FF8552] text-[#ADFFD9]'>Skills</p>
                <p className='text-[#E7D9E7] text-2xl py-4'>These are the technologies I've worked with.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-rows-2 gap-2 text-center py-8'>
                <div className='shadow-md shadow-[#FF220C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4 text-[#297373]'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#FF220C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4 text-[#297373]'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#FF220C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt="Javascript icon" />
                    <p className='my-4 text-[#297373]'>Javascript</p>
                </div>

                <div className='shadow-md shadow-[#FF220C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                    <p className='my-4 text-[#297373]'>React</p>
                </div>

                <div className='shadow-md shadow-[#FF220C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Redux} alt="Redux icon" />
                    <p className='my-4 text-[#297373]'>Redux</p>
                 </div>

                 <div className='shadow-md shadow-[#FF220C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node icon" />
                    <p className='my-4 text-[#297373]'>Node JS</p>
                </div>

                <div className='shadow-md shadow-[#FF220C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-4 text-[#297373]'>Tailwind CSS</p>
                </div>

                <div className='shadow-md shadow-[#FF220C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
                    <p className='my-4 text-[#297373]'>Bootstrap</p>
                </div>

                <div className='shadow-md shadow-[#FF220C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="Mongo icon" />
                    <p className='my-4 text-[#297373]'>Mongo DB</p>
                </div>

                <div className='shadow-md shadow-[#FF220C] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Heroku} alt="Heroku icon" />
                    <p className='my-4 text-[#297373]'>Heroku</p>
    `           </div>

                
            </div>
        </div>
    </div>
  )
}

export default Skills