import React from 'react'
import PropertyCard from './PropertyCard'

function Cards_Wrapper() {
  return (
    <div className='cards-wrapper mt-8 container mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-5 gap-10 justify-items-center '>
      <PropertyCard />

    </div>
  )
}

export default Cards_Wrapper