import React from 'react'
import PropertyCard from './PropertyCard'
import cardata from './HeroSliders'
import RentaldCard from './RentaldCard'
import Heroslider from './Heroslider';
import { Link } from 'react-router-dom';

function Cardscontainer({ data,setData}) {
  return (
    <section className='home'>
        <Heroslider/>
    <div className="cards-wrapper min-h-screen mt-14  container flex flex-col gap-y-6 ">
 <div className="sales-section items-start ">
     <div className="top flex items-center justify-between mb-6">
     <h1 className='text-xl ml-4 lg:ml-0 2xl:text-3xl font-medium flex'>Featured Sales</h1>
   <Link to='#' className='px-5 text-sm border-gray-400 border-[0.5px]  py-1 bg-gray-50 hover:scale-105 duration-300 ease-in-out'>All</Link>
     </div>
    <div className=' sale-wrapper mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center md:gap-5 gap-10 justify-items-center '>
  <PropertyCard />
</div>
    </div>

 <div className="rentals-section items-start ">
 <div className="top flex items-center justify-between mb-6">
     <h1 className='text-xl ml-4 lg:ml-0 2xl:text-3xl font-medium  flex'>Featured Rental</h1>
   <Link to='#' className='px-5 text-sm border-gray-400 border-[0.5px]  py-1 bg-gray-50 hover:scale-105 duration-300 ease-in-out'>All</Link>
     </div>
     <div className=' sale-wrapper mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center md:gap-5 gap-10 justify-items-center '>
  
  <RentaldCard/>
</div>
    </div>

     {/* <div className="Rental-section flex-col items-start ">
     <h1 className='text-xl ml-4 lg:ml-0 2xl:text-3xl font-medium mb-4 flex'>Featured Rental</h1>
    <div className=' sale-wrapper mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center md:gap-5 gap-10 justify-items-center '>
  {cardata.map(({ pix, id, price, state, str, city, bed, bath, size,purpose }) => (
        <PropertyCard key={id} pix={pix} id={id} price={price} state={state} str={str} city={city} bed={bed} bath={bath} size={size} purpose={purpose} />
        ))}
    </div>
    </div> */}

    </div>
    </section>
  )
}

export default Cardscontainer








// <div className="cards-wrapper min-h-screen mt-14  container flex flex-col gap-y-6 ">
     
// <div className="sales-section flex-col items-start ">
// <h1 className='text-xl ml-4 lg:ml-0 2xl:text-3xl font-medium mb-4 flex'>Featured Sales</h1>
// <div className=' sale-wrapper mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center md:gap-5 gap-10 justify-items-center '>
// {cardata.map(({ pix, id, price, state, str, city, bed, bath, size,purpose }) => (
//    <PropertyCard key={id} pix={pix} id={id} price={price} state={state} str={str} city={city} bed={bed} bath={bath} size={size} purpose={purpose} />
//    ))}
// </div>
// </div>

// <div className="Rental-section flex-col items-start ">
// <h1 className='text-xl ml-4 lg:ml-0 2xl:text-3xl font-medium mb-4 flex'>Featured Rental</h1>
// <div className=' sale-wrapper mb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center md:gap-5 gap-10 justify-items-center '>
// {cardata.map(({ pix, id, price, state, str, city, bed, bath, size,purpose }) => (
//    <PropertyCard key={id} pix={pix} id={id} price={price} state={state} str={str} city={city} bed={bed} bath={bath} size={size} purpose={purpose} />
//    ))}
// </div>
// </div>

// </div>