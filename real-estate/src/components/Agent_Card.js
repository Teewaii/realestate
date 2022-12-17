import React from 'react'
import agent from '.././img/agent.jpg';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { EnvelopeIcon } from '@heroicons/react/24/solid';

function Agent_Card() {
  return (
    <div className='bg-white rounded-sm h-[400px] w-[320px] flex 
    justify-center py-6 shadow-sm'>
      <div className="agent-wrapper flex flex-col items-center ">
        <img src={agent} alt="aagent-pix" className='rounded-full w-[100px] 2xl:w-[130px] mb-4 border-gray-300 border-2' />
        <div className="agent-details flex flex-col justify-center">
          <h1 className='text-sm lg:text-lg 2xl:text-2xl font-medium'>Micheal James</h1>
          <p className='text-sm lg:text-md 2xl:text-lg text-gray-500 mb-4'>Real Estate Company</p>
          <a href="tel:+234 7034444719" className='agent_contact mb-2 text-white flex items-center gap-x-4 px-10  bg-[#31AA52] py-3 rounded-lg uppercase
                hover:shadow-lg hover:scale-105 duration-300 ease-in-out
                '><span className='text-[10px] w-5 flex'><PhoneIcon /></span>View phone</a>
          <button type='button' className='text-[#31AA52] flex items-center gap-x-4 px-10 border-2 border-[#31AA52] py-3 rounded-lg uppercase hover:scale-105 hover:shadow-lg duration-300 ease-in-out'>
            <span className='text-[10px] w-5 flex'><EnvelopeIcon />
            </span>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Agent_Card