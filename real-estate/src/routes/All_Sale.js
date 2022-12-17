import React from 'react';
import Filter from '../components/Filter'
import PropertyCard from '../components/PropertyCard'

function All_Sale() {
  window.scroll(0, 0)
  return (
    <div className='min-h-screen '>
      <div className="rental-wrapper container">
        <Filter />
      </div>
      <div className="title flex gap-x-2 items-end container mt-6">
        <p className='text-xl lg:text-2xl font-medium text-gray-700'>Apartments for Sale</p>
        <small className='text-[12px] lg:text-[14px] text-gray-500'>(23,000) results found.</small>
      </div>

      {/* <Cards_Wrapper /> */}

      <div className='cards-wrapper mt-8 container pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-5 gap-10 justify-items-center '>
        <PropertyCard />

      </div>
    </div>
  )
}

export default All_Sale