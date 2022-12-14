import React from 'react'
import cardata from './HeroSliders'
//import React, { useEffect, useState } from 'react'
import axios from 'axios';
import damac_logo from '.././img/damac_logo.png'
//import cardPix from '.././img/cardPix.jpg';
import { FaBed } from 'react-icons/fa'
import { FaBath } from 'react-icons/fa'

function RentaldCard() {
  return (
    
        <>
      {cardata.map(({ pix, id, price, state, str, city, bed, bath, size }) => (
        <div key={id} className="card bg-white shadow-lg rounded-lg h-[450px] pb-4 lg:pb-0 sm:h-[330px] w-[90%] md:w-[250px] lg:w-[285px]  2xl:w-[250px]  cursor-pointer hover:shadow-xl hover:scale-105 duration-300 ease-in-out">
         <div className="thumb relative border">
          <img src={pix} alt="property-picture" className='w-[100%] h-[65%] sm:h-[50%] p-2' />
          <small className='bg-white text-red-800 font-medium absolute top-[70%] right-[25px] py-1 px-2 rounded-md '>New!</small>
          </div>
          <div className="desc mx-4">
            <div className="top-desc flex items-end justify-between pb-2 relative after:absolute after:left-0 after:right-0 after:bg-green after:h-[0.5px] after:bottom-0">
              <div className="text text-left flex flex-col mt-2 space-y-1">
                <h1 className='text-xl font-semibold  mb-1 relative '>{price} <span>&#36;</span>  <span>/Month</span></h1>
                <p className='text-sm font-medium text-gray-700'>Apartment for sale</p>
                <small className='text-[12px] text-gray-500'>{state}, {str}</small>
                <small className='text-[12px] text-gray-500'>26 November 2020</small>
              </div>
              {/* <div className="agent-logo ">
              <img src={damac_logo} alt="agent-logo" className='w-24 h-8' />
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
        </div>

      ))}
    </>
   
  )
}

export default RentaldCard