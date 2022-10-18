import React from 'react'
import right_arrow from '../../img/rightArrow.svg';
export default function Btn() {
  return (
    <div className='relative w-fit' >
      <button className='flex flex-row-reverse gap-2 md:gap-3 items-center rounded-[10px] py-[12px] px-[35px] lg:py-[20px] lg:px-[50px] text-secondary text-[20px] font-medium ease-in-out duration-300 bg-primary hover:bg-secondary hover:text-primary '><span className='animate-pulse'><img className='w-[20px] md:w-[25px]' src={right_arrow} alt="waht's next" /></span>Say hello!</button>
      {/* <span className='absolute w-[20px] h-[20px] right-[-5px] rounded-full bg-secondary animate-bounce'></span> */}
    </div>
  )
}
