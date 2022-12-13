import React from 'react'
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline'
function Search() {
  return (
    <div className='absolute lg:top-[40%] lg:left-[10%] lg:right-[10%] z-[40] '>
       <span className='relative'>
       <MagnifyingGlassIcon 
        className='w-4 absolute left-5 top-[15%] right-0 text-gray-400'/>
        <input type="search "  
        placeholder='Search for properties...' 
        className=' px-10 py-2 rounded-lg placeholder:text-[12px] placeholder:pl-4 lg:placeholder:pl-2 lg:w-[500px] lg:placeholder:text-md lg:px-14 focus:outline-none'
        
        /></span>
       
    </div>
  )
}

export default Search