import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Herosliders from './HeroSliders'
import { Autoplay, Pagination, Navigation } from "swiper";
import hero1 from '../img/hero1.jpg'
import hero2 from '../img/hero2.jpg'
import hero3 from '../img/hero3.jpg'
import hero4 from '../img/hero4.jpg'
import Search from './Search';

function Heroslider() {
  return (
    <div className='w-screen h-[25vh] bg-gray-600 flex flex-col items-center justify-center
    lg:h-[75vh]
    '>
<div className="swiper-wrapper relative ">
<Swiper
style={{
    "--swiper-navigation-color": "#fff",
    "--swiper-pagination-color": "#fff",
    "--swiper-navigation-size": "20px",
  }}
    spaceBetween={30}
    centeredSlides={true}
        pagination={{
          dynamicBullets: true,
        }}
       
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
       
        className="mySwiper h-[100%] w-[100%"
      >
       
       <SwiperSlide>
          <img src={hero1} alt='hero-image' className=' w-[100%] h-[100%]' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero2} alt='hero-image' className=' w-[100%] h-[100%] '  />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero3} alt='hero-image' className=' w-[100%] h-[100%] ' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hero4} alt='hero-image' className=' w-[100%] h-[100%]' />
        </SwiperSlide>

      </Swiper>
      </div>
      <Search/>
        </div>
  )
}

export default Heroslider