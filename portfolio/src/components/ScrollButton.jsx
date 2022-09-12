import React, {useState} from 'react';
import Logo from '../assets/foxicon.png';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
        });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-[#F7F2F7] tracking-wider'>
                    Return
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-[#89568A] text-[#FF8552] font-bold text-lg'
                            Logo onClick={scrollToTop} 
                            style={{display: visible ? 'inline' : 'none'}} />
                            </button>
                        </a>
                    </div>
  );
}
  
export default ScrollButton;