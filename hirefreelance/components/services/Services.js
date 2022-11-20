import Image from 'next/image';
import brandId from '../../public/img/brandId.svg';
import brandConsult from '../../public/img/brandConsult.svg';
import webDev from '../../public/img/webDev.svg';
import marketAnalysis from '../../public/img/marketAnalysis.svg';

import { motion } from "framer-motion";



function Services() {
  return (
    <section id='services' className="services h-fit py-[70px] lg:py-[110px] 
   ">
      <div className="services-wrapper flex flex-col items-center  w-[100%]   container
    ">
        <div className="header flex items-center flex-col gap-4 mb-8  ">
          <h1 className='text-3xl lg:text-4xl text-heading '>Services</h1>
          <p className='text-center text-[0.8rem] max-w-[270px] lg:max-w-[400px]'>Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.</p>
        </div>

        <div className="items-wrapper lg:flex flex-col gap-y-4 lg:gap-y-6  lg:w-[90%] 2xl:w-[72%]  relative py-8 lg:py-4    
   before:absolute before:bg-service_wmk before:w-[135px] before:h-[130px] before:top-[0%] before:left-0  before:bg-contain before:z-[-1]
   before:bg-left   after:absolute after:bg-service_wmk after:w-[135px] after:h-[130px] after:bottom-[0%] after:right-0  after:bg-contain
   after:bg-right after:z-[-1] ">

          <div className="items-left  lg:flex justify-start gap-x-7  pb-4 px-8 space-y-4 lg:space-y-2 lg:pl-[70px] lg:pt-[55px]">
            <motion.div
              initial={{ x: -30, opacity: 0.3 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }} className="brandId flex gap-4 px-4 py-6 rounded-md shadow-xl bg-white">
              <Image className='w-7'
                src={brandId}
                alt='icon' />
              <div className="desc">
                <h1 className='text-sm text-heading mb-2 uppercase'>Branding Idendity</h1>
                <p className='text-[0.75rem] leading-4 text-heading max-w-[150px]' >Our support team will get assistance from AI-powered.</p>
              </div>
            </motion.div>

            <motion.div initial={{ x: 30, opacity: 0.3 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }} className="brandCons flex gap-4 px-4 py-6 rounded-md shadow-xl bg-white">
              <Image className='w-7'
                src={brandConsult}
                alt='icon' />
              <div className="desc">
                <h1 className='text-sm text-heading mb-2 uppercase'>Branding consult</h1>
                <p className='text-[0.75rem] leading-4 text-heading max-w-[150px]' >Our support team will get assistance from AI-powered.</p>
              </div>
            </motion.div>
          </div>

          <div className="items-right lg:flex justify-end gap-x-7  px-8  space-y-4 lg:space-y-2 lg:pr-[70px] lg:pb-[55px]">

            <motion.div initial={{ x: -30, opacity: 0.3 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }} className="webDev flex gap-4 px-4 py-6 rounded-md shadow-xl bg-white">
              <Image className='w-7'
                src={webDev}
                alt='icon' />
              <div className="desc">
                <h1 className='text-sm text-heading mb-2 uppercase'>web development</h1>
                <p className='text-[0.75rem] leading-4 text-heading max-w-[150px]' >Our support team will get assistance from AI-powered.</p>
              </div>
            </motion.div>

            <motion.div initial={{ x: 30, opacity: 0.3 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }} className="marketAnalysis flex gap-4 px-4 py-6 rounded-md shadow-xl bg-white">
              <Image className='w-7'
                src={marketAnalysis}
                alt='icon' />
              <div className="desc">
                <h1 className='text-sm text-heading mb-2 uppercase'>market anlysis</h1>
                <p className='text-[0.75rem] leading-4 text-heading max-w-[150px]' >Our support team will get assistance from AI-powered.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services