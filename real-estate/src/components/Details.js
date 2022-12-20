import React from 'react';
import { useParams } from 'react-router-dom';
import { IoLocationSharp } from 'react-icons/io5'
import DetailsCarousal from './DetailsCarousal';
import GenInfo from './GenInfo';
import Agent_Card from './Agent_Card';
import PropertyLists from './PropertyLists';

function Details() {
  const { id } = useParams()
  window.scroll(0, 0);


  return (

    <div className='mt-20 lg:mt-32 pt-10 pb-12 container min-h-screen'>
      {/* fetch and display details about each property from the premade properties list in PropertyLists.js */}
      {PropertyLists.filter((item) => item.id == id).map(({ id, str, state, city, price }) => (
        <div key={id} className="details-wrapper flex flex-col lg:flex-row justify-between">
          <div className="left w-[100%] lg:w-[62%] xl:w-[68%] 2xl:w-[72%]">
            <div className="top flex items-end justify-between  w-[100%]">
              <div className="text flex flex-col items-start  ">
                <h1 className='text-lg lg:text-3xl mb-2'>
                  2 bed flat to rent
                </h1>
                <div className="location flex items-center ">
                  <IoLocationSharp className='text-lime-500' />
                  <small>{str}, {state}, {city}</small>
                </div>
              </div>
              <div className="price">
                <h1 className='text-lg lg:text-3xl font-bold mb-2'>
                  {price} &#xa3;
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
          <div className="right   mt-[80px] flex">
            <Agent_Card />
          </div>

        </div>
      ))}
    </div>
  )
}

export default Details