import React from 'react';
import logo from '../../img/logo.svg';
import hamburger from '../../img/hamburger.svg';
import close from '../../img/close.svg';
import Btn from '../btn/Btn';


export default function Nav({ toggle, toggleMenu}) {
    
  return (
    <nav className=' relative'>
    <div className='navContainer container flex items-center justify-between py-[30px] md:py-[45px] border-2 '>
        <div className="logo cursor-pointer"><img className='w-[40px]' src={logo} alt="" /></div>
        <div className="links">
        <ul className={toggle?'hidden absolute md:relative container bg-white  top-0 left-0 right-0 z-[-2] pt-[128px] pb-[44px]  md:pt-0 md:pb-0  flex-col md:flex-row items-start gap-[20px] md:gap-[27px] mb-[30px] md:mb-0':'flex absolute md:relative container  top-0 left-0 right-0 z-[-2] pt-[128px] pb-[44px]  md:pt-0 md:pb-0  flex-col md:flex-row items-start gap-[20px] md:gap-[27px] mb-[30px] md:mb-0'}>
                
                <li className='border-b-[0.2px] border-opacity-[0.3] border-lightprim pb-[20px] w-[100%] text-left hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
                md:border-b-0 md:pb-0
                '><a className='text-[17px] text-primary font-medium ml-[20px] 
                md:ml-0
                ' href="#">About</a></li>
                <li className='border-b-[0.2px] border-opacity-[0.3] border-lightprim pb-[20px] w-[100%] text-left hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
                md:border-b-0 md:pb-0
                '><a className='text-[17px] text-primary font-medium ml-[20px] 
                md:ml-0
                ' href="#">Experience</a></li>
                <li className='border-b-[0.2px] border-opacity-[0.3] border-lightprim pb-[20px] w-[100%] text-left hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
                md:border-b-0 md:pb-0
                '><a className='text-[17px] text-primary font-medium ml-[20px] 
                md:ml-0
                ' href="#">Projects</a></li>
                <li className='border-b-[0.2px] border-opacity-[0.3] border-lightprim pb-[20px] w-[100%] text-left hover:border-b-primary hover:w-[80%] ease-in-out duration-300 
                md:border-b-0 md:pb-0
                '><a className='text-[17px] text-primary font-medium ml-[20px] 
                md:ml-0
                ' href="#">Resume</a></li>
                
                <div className="hello mt-[25px] ml-[20px] md:hidden">
                {/* <button className='btn-small  hover:bg-secondary hover:text-primary duration-300 ease-in-out' >Say hello!</button> */}
            <Btn/>
            </div>
            </ul>
           
           
           
           
        </div>
        {toggle ? 
        <img className='md:hidden w-[28px]  cursor-pointer' onClick={toggleMenu} src={hamburger} alt="hamburger" />:
         <img className='md:hidden w-[25px]  cursor-pointer' onClick={toggleMenu} src={close} alt="close-menu" />}
    </div>
    </nav>
  )
}
