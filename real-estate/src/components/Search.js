import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
function Search() {
  return (
    <div className='flex flex-col justify-center items-center absolute lg:top-[40%]  lg:left-[10%] lg:right-[10%] z-[40] '>
      <h1 className='  text-white md:text-5xl lg:text-5xl 2xl:text-6xl  text:shadow-xl font-bold my-[20px] mt-8 md:my-0  lg:mt-[-170px] xl:mt-[-100px] 2xl:mt-[-150px] lg:max-w-[700px] text-center '>Your dream home is here!</h1>
      <span className='relative'>
        <MagnifyingGlassIcon
          className='w-4 lg:w-5 absolute left-4 top-[27%] md:top-[70%] lg:top-[65%] lg:left-7 right-0 text-gray-400 z-[200]' />
        <input type="search "
          placeholder='Search for properties...'
          className=' px-10 py-1.5 lg:py-3 md:mt-12 rounded-full placeholder:text-[12px]  lg:placeholder:text-[15px] placeholder:pl-2 lg:placeholder:pl-2 lg:w-[500px] lg:placeholder:text-md lg:px-14 focus:outline-none focus:opacity-90'

        /></span>

    </div>
  )
}

export default Search