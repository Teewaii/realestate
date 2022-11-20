
import Image from 'next/image';
import alison from '../../public/img/alison.svg';
import diane from '../../public/img/diane.svg';
import shawn from '../../public/img/shawn.svg';
import {StarIcon } from '@heroicons/react/24/outline';
import {EllipsisVerticalIcon } from '@heroicons/react/24/solid';


function Agents() {
  return (
    <section className="agent h-fit py-[95px] lg:py-[155px]  bg-gradient-to-b from-grad overflow-hidden">
        <div className="agents-wrapper flex flex-col items-center container  ">
        <div className="heading flex flex-col items-center mb-6">
            <h1 className='text-3xl lg:text-4xl text-heading mb-2 '>Our Featured Agents</h1>
            <p className='text-[0.8rem] text-body'>Meet our amazing team members</p>
            </div>
      
        <div className="agents-card flex lg:items-start lg:justify-center  w-[100%] space-x-10 overflow-scroll scrollbar-hide py-8 px-4 snap-mandatory snap-x">
           
        {/* <div className="agents-card flex justify-center gap-[20px] mt-6 border overflow-auto w-[100%] ">
            */}
            <div  className="alison px-[8px] pb-6 shadow-xl rounded-md min-w-[250px] lg:min-w-[230px]  snap-center bg-white">
                <div className="icons flex pt-4 justify-between">
                  <StarIcon className='w-5 cursor-pointer '/>
                    <EllipsisVerticalIcon  className='w-6 cursor-pointer '/>
                </div>
                <div className="info flex flex-col items-center px-[25px] mb-[30px] ">               
                    <Image className='w-[125px] h-[125px]'
                    src={alison}
                    alt="alison"/>
                    <h1 className='text-heading text-[0.9rem]'>Alison Kiara</h1>
                    <small className='text-location text-[0.7rem]'>Michigan, TX</small>
                </div>
                <div className="contact text-center ">
                    <p className='text-[0.7rem] mb-2 text-heading'>989-653-2986</p>
                    <p className='text-[0.7rem] text-primary'>alisonkiara@hommy.com</p>
                </div>
            </div>

            <div  className="diane pb-6 px-[8px] shadow-xl rounded-md min-w-[250px] lg:min-w-[230px] lg:mt-[30px] snap-center bg-white">
                <div className="icons flex pt-4 justify-between">
                  <StarIcon className='w-5 cursor-pointer '/>
                    <EllipsisVerticalIcon  className='w-6 cursor-pointer '/>
                </div>
                <div className="info flex flex-col items-center px-[25px] mb-[30px] ">               
                    <Image className='w-[125px]'
                    src={diane}
                    alt="diane"/>
                    <h1 className='text-heading text-[0.9rem]'>Dianne Sabin</h1>
                    <small className='text-location text-[0.7rem]'>New Jeresy, TX</small>
                </div>
                <div className="contact text-center ">
                    <p className='text-[0.7rem] mb-2 text-heading'>989-653-2550</p>
                    <p className='text-[0.7rem] text-primary'>hidianne@hommy.com</p>
                </div>
            </div>

            <div  className="shawn pb-6 px-[8px] shadow-xl rounded-md min-w-[250px]  lg:mt-[60px] snap-center bg-white">
                <div className="icons flex pt-4 justify-between">
                  <StarIcon className='w-5 cursor-pointer '/>
                    <EllipsisVerticalIcon  className='w-6 cursor-pointer '/>
                </div>
                <div className="info flex flex-col items-center px-[25px] mb-[30px] ">               
                    <Image className='w-[125px]  h-[125px]'
                    src={shawn}
                    alt="shawn"/>
                    <h1 className='text-heading text-[0.9rem]'>Shawn Ramirez</h1>
                    <small className='text-location text-[0.7rem]'>Illinois, NZ</small>
                </div>
                <div className="contact text-center ">
                    <p className='text-[0.7rem] mb-2 text-heading'>989-653-2986</p>
                    <p className='text-[0.7rem] text-primary'>iamrami@hommy.com</p>
                </div>
            </div>

            </div>
           
        </div>
    </section>
  )
}

export default Agents