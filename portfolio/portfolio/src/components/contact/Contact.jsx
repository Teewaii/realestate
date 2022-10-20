import React from 'react'

export default function Contact() {
  return (
    <section className='hero  relative bg-hero-right-mob  bg-contain bg-right-top bg-no-repeat overflow-hidden
            md:bg-hero-contact md:h-[70vh] md:bg-left-top   dark:bg-dark mb-[85px]
            md:mb-0
            '>
              <div className="bucket container flex flex-col items-center justify-between  h-[100%]
              md:flex-row
              ">
              <div className="desc  text-left pt-[50px] ">
                <h1 className='text-[38px] mb-[10px] 
                md:text-5xl md:mb-[24px]' >
                  Say <span className='text-secondary font-bold'>hello!</span>
                </h1>
                <p className='border-b-[1px] border-lightprim pb-[28px]  text-primary text-md
                md:max-w-[500px] md:pb-[46px] md:text-2xl 
                '>Get in touch and discover how I can contribute to the growth of  your business and team.</p>
              <div className="shoot mt-[12px] mb-[20px]">
                <h2 className="font-bold text-md">Or shoot me an email at:</h2>
              <small className='text-primary text-lg'>taiyeajimati@gmail.com</small>
              </div>
              </div>

              <div className="form border-[1px] border-lightprim mt-[30px] rounded-[5px] w-[100%] py-[50px] px-[26px]
              md:w-[520px]
              ">
                <form className='flex flex-col gap-[20px] ' action="#">
                <input className='placeholder-lightprim   py-[10px] border-[1px] border-lightprim w-[100%] rounded-[5px]
                pl-[24px] focus:border-0 focus:ring-[2px] focus:ring-primary  focus:outline-none
               md:py-[20px]   ' type="text" name="name" id="name" placeholder='Name'  />
               
                <input className='placeholder-lightprim  red py-[10px] border-[1px] border-lightprim w-[100%] rounded-[5px]
                pl-[24px] focus:border-0 focus:ring-[2px] focus:ring-primary  focus:outline-none
               md:py-[20px]   ' type="text" name="subject" id="subject" placeholder='Subject'  />
              
                <textarea  className='placeholder-lightprim   py-[10px] border-[1px] border-lightprim w-[100%] rounded-[5px]
                pl-[24px] focus:border-0 focus:ring-[2px] focus:ring-primary  focus:outline-none

md:py-[20px]                '  name="msg" id="msg" cols="30" rows="8" placeholder='Message'></textarea>
              < div className ='send flex justify-between mt-3'>
              <button className='btn rounded-[10px] py-[10px] px-[45px]
       lg:px-[50px] text-secondary text-[20px] font-medium ease-in-out dark:text-primary dark:bg-[white] dark:hover:bg-secondary
      duration-300 bg-primary hover:bg-secondary  hover:text-primary inline'>Send</button>
             <span></span>
             </div>
                </form>
              </div>
              </div>
      </section>
  )
}
