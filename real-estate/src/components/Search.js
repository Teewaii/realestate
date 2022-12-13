import React from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
function Search() {
  return (
    <div className='flex flex-col justify-center items-center absolute lg:top-[40%]  lg:left-[10%] lg:right-[10%] z-[40] '>
      <h1 className='  text-white md:text-5xl lg:text-6xl text:shadow-xl font-bold lg:mt-[-80px] lg:max-w-[700px] text-center '>Your dream home is here!</h1>
       <span className='relative'>
       <MagnifyingGlassIcon 
        className='w-4 absolute left-4 top-[30%] md:top-[70%] right-0 text-gray-400 z-[200]'/>
        <input type="search "  
        placeholder='Search for properties...' 
        className=' px-10 py-2 md:mt-12 rounded-lg placeholder:text-[12px] placeholder:pl-2 lg:placeholder:pl-2 lg:w-[500px] lg:placeholder:text-md lg:px-14 focus:outline-none focus:opacity-90'
        
        /></span>
      
    </div>
  )
}

export default Search