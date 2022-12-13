import React, { useEffect, useState } from 'react'
import axios from 'axios';
import damac_logo from '.././img/damac_logo.png'
//import cardPix from '.././img/cardPix.jpg';
import { FaBed } from 'react-icons/fa'
import { FaBath } from 'react-icons/fa'
import cardata from './HeroSliders'

// const options = {
//   method: 'GET',
//   url: 'https://bayut.p.rapidapi.com/properties/list',
//   params: {
//     locationExternalIDs: '5002,6020',
//     purpose: 'for-rent',
//     hitsPerPage: '25',
//     page: '0',
//     lang: 'en',
//     sort: 'city-level-score',
//     rentFrequency: 'monthly',
//     categoryExternalID: '4'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'de2aefe3abmsh1b65c2ddfb873dbp1fa161jsnab8021a033ab',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
//   }
// };

function PropertyCard({ data, setData }) {

  useEffect(() => {
    // axios.request(options).then(function (response) {
    //   setData(response.data);
    //   //    console.log(data)
    // }).catch(function (error) {
    //   console.error(error);
    // });

  }, [])
  return (
    <div className='cards-wrapper mt-8 container mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-5 gap-10 justify-items-center '>

      {cardata.map(({ pix, id, price, state, str, city, bed, bath, size }) => (
        <div key={id} className="card bg-white shadow-lg rounded-lg h-[450px] pb-4 lg:pb-0 sm:h-[330px] w-[90%] md:w-[250px] cursor-pointer hover:shadow-xl hover:scale-105 duration-300 ease-in-out">
          <img src={pix} alt="property-picture" className='w-[100%] h-[65%] sm:h-[50%] p-2' />
          <div className="desc mx-4">
            <div className="top-desc flex items-end justify-between pb-2 relative after:absolute after:left-0 after:right-0 after:bg-green after:h-[0.5px] after:bottom-0">
              <div className="text text-left flex flex-col mt-2 space-y-1">
                <h1 className='text-xl font-semibold  mb-1 relative '>{price} <span>&#36;</span>  </h1>
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
    </div>
  )
}

export default PropertyCard