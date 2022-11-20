import Image from 'next/image';
import choose from '../../public/img/service.svg';
import clients from '../../public/img/clients.svg';
import initial from '../../public/img/initial.svg';
import request from '../../public/img/request.svg';
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { motion } from "framer-motion";


function Features() {
    return (
        <section id='' className="features h-fit flex items-center">
        {/* <section id='' className="features min-h-screen md:h-[40vh] xl:min-h-[70vh] border flex items-center"> */}
            <div className='flex flex-col items-center gap-8 py-20 lg:py-[160px] container'>

                <div className="top flex flex-col items-center text-center ">
                    <h1 className='text-3xl lg:text-4xl text-heading mb-4 '>Our Features</h1>
                    <p className='text-sm max-w-[350px]  mb-4'>Unleash your creativety with a visual collaboration plattorm that enables effective ideation</p>
                </div>
                <div className="feature-item md:flex items-end  justify-between w-[100%] space-y-8 md:space-y-0 mb-4 lg:mb-12">
                    <motion.div initial={{ x: -30,opacity:0.3 }}
                  whileInView={{ x: 0,opacity:1}}
                  transition={{ duration: 1 }} className="choosing flex flex-col items-center space-y-2  ">
                        <Image className='w-10 mb-4'
                            src={choose}
                            alt='icon'
                        />
                        <h1>Choosing a Service</h1>
                        <p className='text-[0.8rem] w-[180px] text-center space-y-2 ' >Choosing an accountant that matches your needs</p>

                    </motion.div>

                    <motion.div initial={{ y: -30,opacity:0.3 }}
                  whileInView={{ y: 0,opacity:1}}
                  transition={{ duration: 1 }} className="clients flex flex-col items-center space-y-2  ">
                        <Image className='w-10 mb-4'
                            src={clients}
                            alt='icon'
                        />
                        <h1>Our Clients Say</h1>
                        <p className='text-[0.8rem] w-[180px] text-center space-y-2'>Read the reviews from some of our satisfied clients</p>

                    </motion.div>
                    <motion.div initial={{ y: 30,opacity:0.3 }}
                  whileInView={{ y: 0,opacity:1}}
                  transition={{ duration: 1 }} className="initial flex flex-col items-center space-y-2 ">
                        <Image className='w-10 mb-4'
                            src={initial}
                            alt='icon'
                        />
                        <h1>Initial Consultation</h1>
                        <p className='text-[0.8rem] w-[180px] text-center'>Understanding your accountancy requirements</p>

                    </motion.div>
                    <motion.div initial={{ x: 30,opacity:0.3 }}
                  whileInView={{ x: 0,opacity:1}}
                  transition={{ duration: 1 }} className="request flex flex-col items-center space-y-2 ">
                        <Image className='w-10 mb-4'
                            src={request}
                            alt='icon'
                        />
                        <h1>Request a Callback</h1>
                        <p className='text-[0.8rem] w-[180px] text-center'>Lets talk at a more convenient time for you</p>

                    </motion.div>

                </div>

                <a className='text-sm flex gap-1 underline text-primary' href="#">Learn more <ChevronRightIcon className='w-3' /></a>
            </div>


        </section>
    )
}

export default Features