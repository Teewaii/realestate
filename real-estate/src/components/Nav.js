import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../src/img/logo.svg';
import {UserCircleIcon} from '@heroicons/react/24/solid';
import {Bars3Icon} from '@heroicons/react/24/solid';
import {XMarkIcon} from '@heroicons/react/24/solid';

function Nav({toggle,setToggle,toggleMenu}) {
  
  return (
    <nav className='h-20 shadow-md flex relative flex-col items-center justify-center lg:shadow-none bg-white z-[500]'>
        <div className="nav-wrapper flex items-center justify-between container">
    <div className='left flex justify-between  lg:justify-start w-screen lg:gap-x-24'>
        <img src={logo} alt="logo" />
        <ul className={toggle?"nav-items bg-green absolute w-[250px] h-screen text-left space-y-4 shadow-lg left-[-300px] lg:left-0  top-[80px]  py-8 lg:flex items-center gap-x-6  lg:top-0 lg:relative lg:w-fit lg:space-y-0 lg:bg-white lg:shadow-none ":"duration-200 ease-in-out nav-items absolute top-[80px] w-[250px] pt-8 h-screen  bg-green text-left left-0 lg:flex items-center gap-x-6 lg:relative lg:w-fit lg:bg-white lg:top-0"}>
            <li className='hover:bg-Darkgreen px-4 py-2 pl-8 lg:pl-0 lg:px-0 lg:py-0' >For Sale</li>
            <li className='hover:bg-Darkgreen px-4 py-2 pl-8 lg:pl-0 lg:px-0 lg:py-0' >For Rent</li>
            <li className='hover:bg-Darkgreen px-4 py-2 pl-8 lg:pl-0 lg:px-0 lg:py-0' >Monthly Sale</li>
            <li className='hover:bg-Darkgreen px-4 py-2 pl-8 lg:pl-0 lg:px-0 lg:py-0' >Agents</li>
        </ul>
       {toggle?
        <Bars3Icon onClick={toggleMenu} className='w-8 lg:hidden cursor-pointer duration-300 ease-in-out'/>:
        <XMarkIcon onClick={toggleMenu} className='w-8 lg:hidden cursor-pointer'/>}
        
        </div>        
        <UserCircleIcon className='w-8 cursor-pointer hidden lg:flex'/>
        </div>
    </nav>
  )
}

export default Nav