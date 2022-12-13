import React,{useEffect,useState} from 'react'
import axios from 'axios'
import cardPix from '.././img/card-pix.jpg';


const options = {
  method: 'GET',
  url: 'https://bayut.p.rapidapi.com/properties/list',
  params: {
    locationExternalIDs: '5002,6020',
    purpose: 'for-rent',
    hitsPerPage: '25',
    page: '0',
    lang: 'en',
    sort: 'city-level-score',
    rentFrequency: 'monthly',
    categoryExternalID: '4'
  },
  headers: {
    'X-RapidAPI-Key': 'de2aefe3abmsh1b65c2ddfb873dbp1fa161jsnab8021a033ab',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
};

function PropertyCard({data, setData}) {


    useEffect(() => {
      axios.request(options).then(function (response) {
        setData(response.data);
    //    console.log(data)
      }).catch(function (error) {
        console.error(error);
      });
        
    },[])
  return (
    <div className='cards-wrapper mt-8 container mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 md:gap-5 gap-10 justify-items-center '>
 
        
<div className="card bg-white shadow-lg rounded-lg h-[450px] sm:h-[300px] w-[90%] md:w-[250px] cursor-pointer hover:shadow-xl hover:scale-105 duration-300 ease-in-out">
<img src={cardPix} alt="property-picture" className='w-[100%] h-[65%] sm:h-[50%] p-2' />
<div className="desc text-left pl-6 flex flex-col mt-4 space-y-1">
<h1 className='text-xl font-semibold  mb-1'>290,000 AED </h1>
<p className='text-sm font-medium text-gray-700'>Apartment for sale</p>
<small className='text-[12px] text-gray-500'>London, Oxford</small>
<small className='text-[12px] text-gray-500'>26 November 2020</small>
<div className="amenities">
  <span></span>
</div>
</div>
</div>

        
    </div>
  )
}

export default PropertyCard