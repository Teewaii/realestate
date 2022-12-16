import React from 'react';
import { useParams } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5'
import DetailsCarousal from './DetailsCarousal';
import GenInfo from './GenInfo';
import Agent_Card from './Agent_Card';

function Details() {
  const { name } = useParams()
  window.scroll(0, 0);
  return (
    <div className='pt-10 pb-12 container min-h-screen'>
      <div className="details-wrapper flex justify-between">
        <div className="left w-[100%] lg:w-[68%] x2l:w-[72%]">
          <div className="top flex items-end justify-between  w-[100%]">
            <div className="text flex flex-col items-start  ">
              <h1 className='text-lg lg:text-3xl mb-2'>
                2 bed flat to rent
              </h1>
              <div className="location flex items-center ">
                <IoLocationSharp className='text-green' />
                <small>London, Oxford st</small>
              </div>
            </div>
            <div className="price">
              <h1 className='text-lg lg:text-3xl font-bold mb-2'>
                290,000 &#xa3;
              </h1>
            </div>

          </div>
          <div className="carousel mt-4">
            <DetailsCarousal />
          </div>
          <div className="gen-info">
            <GenInfo />
          </div>
        </div>
        <div className="right hidden lg:flex">
          <Agent_Card />
        </div>

      </div>
    </div>
  )
}

export default Details