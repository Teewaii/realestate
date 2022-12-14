import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import hero1 from '../img/hero1.jpg'
import hero2 from '../img/hero2.jpg'
import hero3 from '../img/hero3.jpg'
import hero4 from '../img/hero4.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";


function DetailsCarousal() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="">
        <div className="thumbnail-wrapper">
        <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
          
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2-carouser"
      >
       <SwiperSlide>
            <img src={hero1} alt='hero-image' className=' w-[100%] h-[100%]' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero2} alt='hero-image' className=' w-[100%] h-[100%] ' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero3} alt='hero-image' className=' w-[100%] h-[100%] ' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero4} alt='hero-image' className=' w-[100%] h-[100%]' />
          </SwiperSlide>
      
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper-carouser"
      >
       <SwiperSlide>
            <img src={hero1} alt='hero-image' className=' w-[100%] h-[100%] ' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero2} alt='hero-image' className=' w-[100%] h-[100%]  ' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero3} alt='hero-image' className=' w-[100%] h-[100%]  ' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={hero4} alt='hero-image' className=' w-[100%] h-[100%] ' />
          </SwiperSlide>
     
      </Swiper> 
        </div>

    </div>
  )
}

export default DetailsCarousal