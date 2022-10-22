import React from 'react'
import right_arrow from '../../img/rightArrow.svg';
export default function Btn() {
  return (
    <div className='relative w-fit' >
      <button className='flex flex-row-reverse gap-2 md:gap-3 items-center rounded-[10px] py-[15px] 
      px-[20px] lg:py-[20px] lg:px-[50px] text-secondary text-[20px] font-medium ease-in-out dark:text-primary dark:bg-[white] dark:hover:bg-secondary
      duration-300 bg-primary hover:bg-secondary  hover:text-primary '><span className='animate-pulse'><svg width="20" height="25" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className='dark:fill-primary' d="M9.35355 4.35355C9.54882 4.15829 9.54882 3.84171 9.35355 3.64645L6.17157 0.464466C5.97631 0.269204 5.65973 0.269204 5.46447 0.464466C5.2692 0.659728 5.2692 0.976311 5.46447 1.17157L8.29289 4L5.46447 6.82843C5.2692 7.02369 5.2692 7.34027 5.46447 7.53553C5.65973 7.7308 5.97631 7.7308 6.17157 7.53553L9.35355 4.35355ZM0 4.5H9V3.5H0V4.5Z" fill="#DBF66F"/>
      </svg>
      </span>Say hello!</button>
      {/* <span className='absolute w-[20px] h-[20px] right-[-5px] rounded-full bg-secondary animate-bounce'></span> */}
    </div>
  )
}
