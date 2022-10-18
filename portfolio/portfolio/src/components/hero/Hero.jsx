import React from 'react';
import Btn from '../btn/Btn';
import heroImg from '../../img/headshot.png'

export default function Hello() {
  return (

<section className='hero h-[85vh] bg-hero-right-mob  bg-contain bg-right-top bg-no-repeat  
md:bg-hero-right-lg 
'>
    <div className='bucket container pt-[74px] text-[17px]'>
      <div className="desc text-left">
        <h2 className='mb-[5px] font-medium '>Hi my name is</h2>
        <h1 className='text-lightprim text-[1.8rem]'>Ajimati Taiye</h1>
        <h1 className='header w-[350px] relative after:absolute after:bg-secondary after:w-[90%] after:h-[9px] after:left-0 after:bottom-[2px] after:z-[-20] mb-[20px]
        md:text-[3rem] md:leading-[3.2rem] md:w-[450px]
        ' >I build web based software solutions!</h1>
        <p className="body text-[1.2rem] w-[90%] mb-[28px]">I’m a  software engineer with focus in frontend development and I occassionly design products & sevices with great experience and accessibility. </p>
      <Btn/>
      </div>
      <div className="img">
      <img className='mt-[55px]' src={heroImg} alt="" />
      </div>
    </div>
    </section>
  )
}
