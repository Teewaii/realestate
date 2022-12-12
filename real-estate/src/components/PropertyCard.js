import React,{useEffect,useState} from 'react'
import axios from 'axios'


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

function PropertyCard() {


    useEffect(() => {
      axios.request(options).then(function (response) {
       // console.log(response.data);
      }).catch(function (error) {
        console.error(error);
      });
        
    },[])
  return (
    <div>
        

        
    </div>
  )
}

export default PropertyCard