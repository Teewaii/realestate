import React from 'react'
import { Link } from 'react-router-dom';
// import logo from '../../src/img/logo.svg';
import logo from '../../src/img/logo.svg'

import { UserCircleIcon } from '@heroicons/react/24/solid';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';

function Nav({ toggle, setToggle, toggleMenu }) {

  return (
    <nav className='h-[6rem] 2xl:h-[7rem]  flex fixed top-0 left-0 right-0 flex-col items-center justify-center bg-white z-[500]
    after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-lime-500
    '>
      <div className="nav-wrapper flex items-center justify-between container">
        <div className='left flex justify-between  lg:justify-start w-screen lg:gap-x-24'>
          <a href="/" className='flex'>
            <img src={logo} alt="logo" className='cursor-pointer w-[150px]  flex' />
          </a>
          <ul className={!toggle ? "nav-items bg-green absolute w-[250px] h-screen  text-left space-y-4 shadow-lg left-[-300px] lg:left-0  top-[80px]  py-8 lg:flex items-center gap-x-6  lg:top-0 lg:relative lg:w-[500px]  lg:space-y-0 lg:bg-transparent lg:h-fit lg:shadow-none " : " nav-items absolute top-[95px] w-[250px] md:w-[350px] pt-8 h-screen lg:py-0 bg-lime-500 text-left left-0 flex flex-col items-start lg:flex lg:flex-row   lg:items-center gap-x-6 lg:relative lg:bg-transparent lg:top-0 duration-200 ease-in-out"}>
            <Link to='/sale-all' className='border-b border-white border-opacity-20 hover:bg-Darkgreen w-[100%] lg:w-[20%]  lg:hover:bg-white px-4 py-2 pl-8 md:pl-16 lg:pl-0 lg:px-0 lg:py-0' onClick={() => setToggle(false)} >For Sale</Link>
            <Link to='/rent-all' className='border-b border-white border-opacity-20 hover:bg-Darkgreen w-[100%] lg:w-[20%] lg:hover:bg-white px-4 py-2 pl-8 md:pl-16 lg:pl-0 lg:px-0 lg:py-0' onClick={() => setToggle(false)} >For Rent</Link>
            <Link to='#' className='border-b border-white border-opacity-20 hover:bg-Darkgreen w-[100%] lg:w-[20%] lg:hover:bg-white px-4 py-2 pl-8 md:pl-16 lg:pl-0 lg:px-0 lg:py-0' onClick={() => setToggle(false)} >Monthly Sale</Link>
            <Link to='#' className='border-b border-white border-opacity-20 hover:bg-Darkgreen w-[100%] lg:w-[20%] lg:hover:bg-white px-4 py-2 pl-8 md:pl-16 lg:pl-0 lg:px-0 lg:py-0' onClick={() => setToggle(false)} >Agents</Link>
          </ul>
          {!toggle ?
            <Bars3Icon onClick={toggleMenu} className='w-8 lg:hidden cursor-pointer duration-300 ease-in-out' /> :
            <XMarkIcon onClick={toggleMenu} className='w-8 lg:hidden cursor-pointer' />}

        </div>
        <UserCircleIcon className='w-8 cursor-pointer hidden lg:flex' />
      </div>
    </nav>
  )
}

export default Nav