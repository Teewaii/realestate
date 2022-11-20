import React from 'react';
import Link from 'next/link';
import Btn from '../btn/Btn';
import Learn from '../btn/Learn';

import { motion } from "framer-motion";


function Hero() {
  return (
    <div id='hero' className="flex  lg:justify-center  items-center lg:items-center   relative hero-wrapper bg-mobHero lg:bg-dekstopHero bg-no-repeat  bg-top bg-cover lg:bg-top lg:bg-cover h-screen z-[-1] ">
        <div className=" flex justify-center   py-6 px-2   bg-white 
        bg-opacity-80 w-[90%]  md:w-[60%] absolute top-[60%] left-4  md:left-12 lg:relative lg:top-0 lg:left-0 lg:w-[100%] p-2 lg:p-0 rounded-lg lg:bg-transparent ">
            
            <div className="desc container "><motion.h1 
            initial={{ y: -30,opacity:0.5 }}
            whileInView={{ y: 0,opacity:1}}
            transition={{ duration: 1.5 }} className='text-[1.8rem]  md:text-4xl xl:text-5xl 2xl:text-6xl lg:w-[450px]  xl:w-[550px]  leading-10  text-heading  md:mb-4'>Find & Hire Expert Freelancers</motion.h1>
            <motion.p initial={{ y: 20,opacity:0.5 }}
      whileInView={{ y: 0,opacity:1}}
      transition={{ duration: 1 }} className='text-sm  md:text-xl w-[95%]  leading-5 xl:text-lg 2xl:text-xl lg:w-[350px] xl:w-[450px] 2xl:w-[500px] md:mb-8'>Work with the best freelance talent from around the world on our secure flexible and cost-effective platform.</motion.p>
      <div className="btns flex  space-x-6 mt-4 ">
       <Btn/>
       <Learn/>
       </div>
       </div>
        
        </div>
    </div>
  )
}

export default Hero