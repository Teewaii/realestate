import React from 'react';
import right_arrow from '../../img/rightArrow.svg';
import right_down from '../../img/downArrow.svg';
import Btn_sec from '../btn/Btn-sec';
export default function About() {
  return (
    <section className='about bg-primary min-h-[100vh]'>
    <div className='bucket pt-[120px] container flex flex-col items-center gap-[64px]' >
      <div className="desc text-left">
        <h2 className=" text-[white] text-[30px]">About <span className='text-secondary font-bold' >me!</span></h2>
        <p className='text-[white]  mt-[20px] w-[95%] leading-[30px] relative 
      border-b-[1px] border-lightprim pb-[30px]
        
        '>Hi, I’m Taiye and I love building software products & services that promotes business and economic growths with great user experience and accessibility. <br/><br/>

<span className='text-secondary font-bold'> Over the last 10 years</span> I have worked in both the advertising and IT industry through which I have been able to demonstrate exceptional skills in graphic/product design, people management, web development and efficient problem solving.<br/> <br/>

My interest in software  development started in 2013 with visual basic. In 2016 I developed more interest in web development through which I was priviledged to work on different amazing web projects across different industries  specificaly using WordPress.<br/> <br/>

Presently, I spend most of my time building more complex and scalable projects using react and vanila Js.</p>
      <div className="toosl">
      <h1 className='tools-used text-secondary text-[18px] mt-[30px] '>Few of the tools I’ve been working with recently!</h1>
    
    <ul className='tool-list text-[white] flex flex-wrap  gap-[20px] mt-[13px]'>
      <li className='flex gap-[10px]'><img src={right_arrow} alt='icon'/>React</li>
      <li className='flex gap-[10px]'><img src={right_arrow} alt='icon'/>Vanila Js</li>
      <li className='flex gap-[10px]'><img src={right_arrow} alt='icon'/>Html</li>
      <li className='flex gap-[10px]'><img src={right_arrow} alt='icon'/>Vanila CSS</li>
      <li className='flex gap-[10px]'><img src={right_arrow} alt='icon'/>TailwindCSS</li>
      <li className='flex gap-[10px]'><img src={right_arrow} alt='icon'/>SCSS / SASS</li>
    </ul>
      </div>
      </div>
      <div className="hero">
        <div className='next flex flex-col items-center'>
        <div className="circle rounded-full w-[50px] h-[50px] border-[2px] animate-bounce border-secondary flex items-center justify-center">
<span><img src={right_down} alt="waht's next" /></span>
        </div>
        <h1 className='text-secondary mb-[20px]'>What's next!</h1>
        <Btn_sec/>
        </div>
      </div>
    </div>

    </section>
  )
}
