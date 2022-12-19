import React, { useEffect, useState } from 'react';
import millify from "millify";
import { Link } from 'react-router-dom';
import axios from 'axios';
import damac_logo from '.././img/damac_logo.png'
//import cardPix from '.././img/cardPix.jpg';
import { FaBed } from 'react-icons/fa';
import { FaBath } from 'react-icons/fa';
import cardata from './PropertyLists';
import Details from './Details';

function PropertyCard({ data, setData, slicer, setSlicer }) {
  useEffect(() => {
    var slicer = '.slice(1,4)'
  }, [])
  return (
    <>

      {cardata.slice(0, 4).map(({ pix, id, price, state, str, city, bed, bath, size, time }) => (
        // <Link key={id} to='/name' className='' >
        <Link key={id} to={`/${id}`} className="card bg-white shadow-lg rounded-lg h-[395px] pb-4  sm:h-[340px] lg:h-fit lg:pb-4 w-[90%] md:w-[225px] lg:w-[285px] xl:w-[270px] 2xl:w-[250px] cursor-pointer hover:shadow-xl hover:scale-105 duration-300 ease-in-out">
          <div className="thumb relative ">
            <img src={pix} alt="property-picture" className='w-[100%] h-[65%] sm:h-[50%] p-2' />
            {time && <small className='bg-white text-red-800 font-medium absolute top-[70%] right-[25px] py-1 px-2 rounded-md '>New!</small>}
          </div>
          <div className="desc mx-4">
            <div className="top-desc flex items-start justify-between pb-2 relative after:absolute after:left-0 after:right-0 after:bg-green after:h-[0.5px] after:bottom-0">
              <div className="text text-left flex flex-col mt-2 space-y-1">
                <h1 className='text-xl font-semibold  mb-1 relative '>{millify(price)} <span>&#36;</span>  </h1>
                <p className='text-sm font-medium text-gray-700'>Apartment for sale</p>
                <small className='text-[10.5px] text-gray-500'>{state}, {str}</small>
                <small className='text-[12px] text-gray-500'>26 November 2020</small>
              </div>
              {/* <div className="agent-logo ">
             <small className='bg-red-500'>Just added</small>
            </div> */}
            </div>
            <div className="amenities pt-3 flex items-center space-x-4">
              <span className='flex items-center gap-2 font-medium text-sm'><FaBed className='text-2xl' />{bed}</span>
              <span className='flex items-center gap-2 font-medium text-sm'><FaBath className='text-lg' />{bath}</span>
              <span className='w-[16px] h-[16px] border-2 border-black relative 
            before:absolute before:top-0 before:bottom-0 before:w-[2px] before:right-[10%] before:left-[45%] before:bg-black
            after:absolute  after:bottom-[45%] after:h-[2px] after:right-0 after:left-0 after:bg-black
            '></span> <span className='text-sm font-medium'>{size}</span>
            </div>
          </div>

        </Link>
      ))}

    </>
  )
}

export default PropertyCard

{/* <>
      
<div key={id} className="card bg-white shadow-lg rounded-lg h-[380px]  lg:pb-0 sm:h-[330px] w-[90%] md:w-[225px] lg:w-[250px] cursor-pointer hover:shadow-xl hover:scale-105 duration-300 ease-in-out">
  <img src={pix} alt="property-picture" className='w-[100%] h-[55%] sm:h-[50%] p-2' />
  <div className="desc mx-4">
    <div className="top-desc flex items-end justify-between pb-2 relative after:absolute after:left-0 after:right-0 after:bg-green after:h-[0.5px] after:bottom-0">
      <div className="text text-left flex flex-col mt-2 space-y-1">
        <h1 className='text-xl font-semibold  mb-1 relative '>{price} <span>&#36;</span>  </h1>
        <p className='text-sm font-medium text-gray-700'>Apartment for {purpose}</p>
        <small className='text-[12px] text-gray-500'>{state}, {str}</small>
        <small className='text-[12px] text-gray-500'>26 November 2020</small>
      </div>
   
    </div>
    <div className="amenities pt-3 flex items-center space-x-4">
      <span className='flex items-center gap-2 font-medium text-sm'><FaBed className='text-2xl' />{bed}</span>
      <span className='flex items-center gap-2 font-medium text-sm'><FaBath className='text-lg' />{bath}</span>
      <span className='w-[16px] h-[16px] border-2 border-black relative 
    before:absolute before:top-0 before:bottom-0 before:w-[2px] before:right-[10%] before:left-[45%] before:bg-black
    after:absolute  after:bottom-[45%] after:h-[2px] after:right-0 after:left-0 after:bg-black
    '></span> <span className='text-sm font-medium'>{size}</span>
    </div>
  </div>
</div>
</> */}