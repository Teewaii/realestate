import React from 'react'
import Filter from '../components/Filter'
import cardata from '../components/PropertyLists';
import PropertyCard from '../components/PropertyCard'
import Cards_Wrapper from '../components/Cards_Wrapper'
import { FaWindows } from 'react-icons/fa'

function All_Rent() {
  window.scroll(0, 0)
  return (
    <div className='mt-[130px] lg:mt-[150px] min-h-screen '>
      <div className="rental-wrapper container">
        <Filter />
      </div>
      <div className="title flex gap-x-2 items-center container mt-6">
        <p className='text-xl lg:text-2xl font-medium text-gray-700'>Apartments for Rent</p>
        <small className='text-[12px] lg:text-[14px] text-gray-500'>({cardata.length}) properties found.</small>
      </div>

      {/* <Cards_Wrapper /> */}

      <div className='cards-wrapper mt-8  container pb-14 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-5 gap-10 justify-items-center '>
        <PropertyCard />

      </div>
    </div>
  )
}

export default All_Rent