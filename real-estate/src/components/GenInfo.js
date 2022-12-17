import React from 'react';
import { useParams } from 'react-router-dom';
import HeroSliders from './HeroSliders';

function GenInfo() {
  const { id } = useParams()
  return (

    <>

      <div className="gen-info-wrapper flex flex-col items-start bg-white mt-12 rounded-sm shadow-md h-fit p-4  border-gray-100 border-[0.3px]">
        <h1 className='text-left font-medium '>General Information</h1>
        {HeroSliders.filter((item) => item.id == id).map(({ id, str, state, city, price, desc, bed, bath }) => (

          <div key={id} className='flex flex-col lg:flex-row items-start lg:items-center gap-y-1 justify-between w-[100%]'>

            <div className="left-side flex gap-x-6 mt-3 ">
              <div className="obj flex flex-col items-start gap-y-2 text-left text-gray-500 text-sm 2xl:text-md">
                <p>Listing id:</p>
                <p>Type:</p>
                <p>published Date:</p>
                <p>Purpose:</p>
                <p>Category:</p>
                <p>Available for viewing:</p>
              </div>

              <div className="values flex flex-col items-start text-left gap-y-2 text-sm 2xl:text-md">
                <span>{id}</span>
                <span> Flat</span>
                <span>2555</span>
                <span>For Rent</span>
                <span>Residential</span>
                <span>Available from 23rd Apr 2022</span>
              </div>

            </div>

            <div className="Right-side flex gap-x-6 mt-3 ">
              <div className="obj flex flex-col items-start gap-y-2 text-gray-500 text-left text-sm 2xl:text-md">
                <p>Bed:</p>
                <p>Bath:</p>
                <p>Area:</p>
                <p>Furnished:</p>
                <p>Propt No.:</p>
                <p>Address:</p>
              </div>

              <div className="values flex flex-col items-start text-left gap-y-2 text-sm 2xl:text-md">
                <span>{bed}</span>
                <span>{bath}</span>
                <span>2555</span>
                <span>Furnished</span>
                <span>52</span>
                <span>Headington, Oxford OX3</span>
              </div>

            </div>
          </div>
        ))}
      </div>
      {HeroSliders.filter((item) => item.id == id).map(({ desc }) => (
        <div className="desc  bg-white mt-6 rounded-sm shadow-sm border-gray-100 border-[0.3px] h-fit p-6 ">
          <h1 className='font-medium text-left mb-2'>Description</h1>
          <p className='text-left text-sm 2xl:text-md text-gray-400'>{desc}</p>
        </div>
      ))}
    </>
  )
}

export default GenInfo