import React from 'react';
import logo from '../../img/logo.svg';
import hamburger from '../../img/hamburger.svg';
import close from '../../img/close.svg';
import Btn from '../btn/Btn';
import Mode from '../../components/btn/Mode';

export default function Nav({ toggle, toggleMenu,dark_mode,DarkMode }) {

  return (
    <nav className=' relative dark:bg-dark  '>
       
      <div className='navContainer container flex items-center justify-between py-[30px] md:py-[30px] 3xl:py-[45px]  '>
        <div className="logo cursor-pointer relative z-[90]"><img className='w-[40px] lg:w-[50px]' src={logo} alt="" /></div>
        <div className="links z-40 ">
          <ul className={toggle ? 'hidden bg-[white] md:bg-opacity-0 flex-col items-start  gap-[20px] absolute top-0 left-0 right-0 pt-[128px] pb-[44px]  md:flex md:gap-[30px] md:flex-row md:relative md:p-0 ' : '  flex flex-col items-start  bg-[white] absolute top-0 left-0 right-0 pt-[128px] pb-[44px]  md:flex md:gap-[30px] md:flex-row md:relative md:p-0'}>

            <li className='text-left mt-[20px] md:dark:text-[white] text-primary font-medium border-b-[0.4px] border-opacity-[0.5] border-lightprim pb-[20px] w-[100%] hover:border-b-[1.5px]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
                md:border-b-0 md:pb-0 md:mt-0'><a className=' ml-[40px]  ' href="#">About</a></li>
            <li className='text-left mt-[20px] md:dark:text-[white] text-primary font-medium border-b-[0.4px] border-opacity-[0.5] border-lightprim pb-[20px] w-[100%] hover:border-b-[1.5px]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
                md:border-b-0 md:pb-0 md:mt-0'><a className=' ml-[40px]  ' href="#">Experience</a></li>
            <li className='text-left mt-[20px] md:dark:text-[white] text-primary font-medium border-b-[0.4px] border-opacity-[0.5] border-lightprim pb-[20px] w-[100%] hover:border-b-[1.5px]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
                md:border-b-0 md:pb-0 md:mt-0'><a className=' ml-[40px]   ' href="#">Projects</a></li>
            <li className='text-left mt-[20px] md:dark:text-[white] text-primary font-medium border-b-[0.4px] border-opacity-[0.5] border-lightprim pb-[20px] w-[100%] hover:border-b-[1.5px]  hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
                md:border-b-0 md:pb-0 md:mt-0'><a className=' ml-[40px]  ' href="#">Resume</a></li>

            <div className="hello scale-[0.8] ml-[20px] mt-[20px] md:hidden">
              {/* <button className='btn-small  hover:bg-secondary hover:text-primary duration-300 ease-in-out' >Say hello!</button> */}
              <Btn />
            </div>
            <Mode
            dark_mode={dark_mode}
            DarkMode={DarkMode}/>
          </ul>

        </div>
        <div className="toggles md:hidden relative  z-[290]" onClick={toggleMenu}  >
{toggle ?
            <img className='md:hidden w-[28px]   cursor-pointer' src={hamburger} alt="hamburger" /> :
            <img className='md:hidden w-[25px]   cursor-pointer' src={close} alt="close-menu" />} 
      
      
      
        {/* {toggle ?
          <span className='md:hidden w-[28px]   cursor-pointer' ><svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="2" rx="1" fill="#146284"/>
<rect y="6" width="20" height="2" rx="1" fill="#146284"/>
<rect y="12" width="20" height="2" rx="1" fill="#146284"/>
</svg>
</span>:
          <span className='md:hidden w-[25px]   cursor-pointer'><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect  className='fill-secondary' x="1.41418" width="20" height="2" rx="1" transform="rotate(45 1.41418 0)" fill="#146284"/>
<rect className='fill-secondary' x="0.000366211" y="14.1422" width="20" height="2" rx="1" transform="rotate(-45 0.000366211 14.1422)" fill="#146284"/>
</svg>
</span>} */}
         
        </div>
      </div>

    </nav>

  )
}
