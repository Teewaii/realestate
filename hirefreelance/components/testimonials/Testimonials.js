// import Swiper core and required modules
import Image from 'next/image';
import { Navigation, Mousewheel, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import shot from '../../public/img/shot.svg'
import testimonies from './testimonies'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonials() {
    return (
        <section className="testimonials h-fit pt-[100px] pb-[200px]  flex flex-col items-center">
            <div className="testimonials-wrapper  container flex flex-col items-center text-center ">
                <div className="title flex flex-col items-center mb-12 ">
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl text-heading mb-2 lg:mb-6'>What our Customers say</h1>
                    <p className='text-[0.8rem] min-w-[200px] '>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                </div>

                {/* <div className="testimonial-container flex flex-col items-center text-center w-fit border px-[50px] py-4 rounded-md">
                    <Image className='w-16 mb-4'
                        src={shot} />
                    <h1 className='text-lg'>Stephan Louis</h1>
                    <p className='text-sm mb-3 text-title'>Developer</p>
                    <p className='text-[0.8rem] text-title lg:max-w-[380px] '>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”</p>
                </div> */}

            </div>
            <div className="swiper-wrap w-[96%]  lg:w-[550px] bg-white-400 h-[250px] 
            relative after:absolute after:left-[4%] after:right-[4%]  
            after:bg-white after:z-[-1] after:top-[30%] after:bottom-[-60px]  md:after:bottom-[20px] lg:after:bottom-[-42px] after:rounded-md after:shadow-lg   before:absolute before:left-[7%] before:right-[7%] 
            before:bg-white before:z-[-1] before:top-[30%] before:bottom-[-75px] md:before:bottom-[-1px] lg:before:bottom-[-60px] before:rounded-md before:shadow-lg before:opacity-70
            ">
          
            <Swiper className='swiper w-[96%]  lg:w-[550px]  h-[370px] lg:h-[350px]'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                // onSwiper={(swiper) => console.log(swiper)}
                // onSlideChange={() => console.log('slide change')}
            >
                {testimonies.map(user=>(

               
                <SwiperSlide key={user.id}> <div className="testimonial-container border bg-white flex flex-col items-center text-center w-[100%] shadow-xl  px-[50px] py-8 md:py-10 rounded-md mb-[40px] ">
                    <Image className='w-16 mb-4 rounded-full'
                        src={user.shot} 
                        width={100} 
                        height={100}
                        alt='headshot' />
                    <h1 className='text-lg'>{user.username}</h1>
                    <p className='text-sm mb-3 text-title'>{user.title}</p>
                    <p className='text-[0.8rem] text-title lg:max-w-[380px] '>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.”</p>
                </div>
                </SwiperSlide>
                
                ))}
                
            </Swiper>
            </div>
        </section>
    )
}

export default Testimonials







 // <Swiper
        //     // install Swiper modules
        //     modules={[Navigation, Pagination, Scrollbar, A11y]}
        //     spaceBetween={50}
        //     slidesPerView={3}
        //     navigation
        //     pagination={{ clickable: true }}
        //     // scrollbar={{ draggable: true }}
        //     onSwiper={(swiper) => console.log(swiper)}
        //     onSlideChange={() => console.log('slide change')}
        // >
        //     <SwiperSlide>Slide 1</SwiperSlide>
        //     <SwiperSlide>Slide 2</SwiperSlide>
        //     <SwiperSlide>Slide 3</SwiperSlide>
        //     <SwiperSlide>Slide 4</SwiperSlide>
        //     ...
        // </Swiper>