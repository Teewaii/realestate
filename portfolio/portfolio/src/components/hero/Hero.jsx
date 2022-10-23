
import React from 'react';
import Btn from '../btn/Btn';
import heroImg from '../../img/headshot.png';
import hds from '../../img/headshot.png';
import pix_frame from '../../img/pix_frame.png';
import arrowDown from '../../img/directArrow.svg';


export default function Hello() {
  return (

    <section className='hero  relative bg-hero-right-mob pt-[120px] bg-contain bg-right-top bg-no-repeat overflow-hidden
            lg:bg-hero-right-lg lg:h-[70vh] xl:h-[90vh] 
                        dark:bg-dark pb-[152px]
            '>
      <div className='bucket container pt-[45px] text-[17px]
                lg:pt-[10px] xl:pt-[150px]  3xl:pt-[220px] lg:flex lg:h-[100vh] lg:items-start justify-center
               
                '>
        <div className="desc text-left lg:flex-[1.7]  overflow-x-hidden">
          <h2 className='mb-[5px] font-medium text-[18px] dark:text-secondary
                    lg:text-[20px] md:mt-[50px]  3xl:mt-[100px]  3xl:text-[30px]
                    '>Hi, my name is</h2>
          <h1 className='name text-lightprim text-[1.3rem] mb-[12px] relative  inline-block pr-[3px]                   
                       md:text-[2.5rem] md:mb-[18px] 2xl:mb-[26px]  xl:text-[3.5rem]  bg-[white]  dark:bg-dark                

                       '>Ajimati Taiye</h1>
          <h1 className='header max-w-[350px] relative after:absolute after:bg-secondary after:w-[90%] after:h-[9px] after:left-0 after:bottom-[2px] after:z-[-20] mb-[20px]
                    md:text-[68px]   2xl:text-[70px] md:leading-[4.5rem] 2xl:leading-[5rem] lg:after:h-[12px] md:max-w-[650px]  2xl:max-w-[650px] md:after:bottom-[7px] 2xl:after:bottom-[11px] 
                    dark:text-[white]
                    ' >I build web based software solutions!</h1>
          <p className="body text-[1rem] md:text-[1.2rem] w-[90%] mb-[28px] dark:text-[white]
                    md:w-[85%]   2xl:text-[1.3rem]  2xl:w-[65%] md:mb-[50px] 2xl:mb-[90px] md:leading-[1.8rem] 2xl:leading-[2rem]
                    ">I’m a  software engineer with focus in frontend development and I occassionly design products & sevices with great experience and accessibility. </p>
          <Btn />
        </div>

        <div className="img lg:flex lg:flex-col lg:items-center lg:flex-[1.1] lg:bg-hds lg:bg-no-repeat lg:h-[100%]
                  lg:bg-center-top lg:bg-contain   
                  ">
          <img className='lg:hidden  md:inline' src={heroImg} alt="" />
          {/* <div className="hidden group direct border-[1px] h-[50px] w-[27px] cursor-pointer rounded-full border-primary md:flex justify-center items-center
                  absolute bottom-0 overflow-hidden before:absolute before:bg-primary before:top-[1] hover:before:top-0 before:bottom-0 before:left-0 before:right-0 
                  before:ease-in-out before:duration-300  animate-bounce
                  ">
                   <span  className='z-[500] ' ><svg  width="8" height="21" viewBox="0 0 8 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className='group-hover:fill-secondary' d="M3.64645 20.3536C3.84171 20.5488 4.15829 20.5488 4.35355 20.3536L7.53553 17.1716C7.7308 16.9763 7.7308 16.6597 7.53553 16.4645C7.34027 16.2692 7.02369 16.2692 6.82843 16.4645L4 19.2929L1.17157 16.4645C0.97631 16.2692 0.659728 16.2692 0.464465 16.4645C0.269203 16.6597 0.269203 16.9763 0.464465 17.1716L3.64645 20.3536ZM3.5 -2.18557e-08L3.5 20L4.5 20L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="#146284"/>
            </svg>
            </span>
                  </div> */}
        </div>
      </div>
    </section>
  )
}