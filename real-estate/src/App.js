
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav';
import PropertyCard from './components/PropertyCard';
import Modal from './components/Modal';
import Heroslider from './components/Heroslider';
import Cardscontainer from './components/Cardscontainer';
import Details from './components/Details';
import Footer from './components/Footer';
import All_Rent from './routes/All_Rent';
import All_Sale from './routes/All_Sale';
import axios from 'axios'

//import { properties, fetchData } from './utils/fetchData';
// const getProperties = async () => {
//   const test = await fetchData('https://us-real-estate.p.rapidapi.com/v2/for-sale', properties)
//   console.log(test)
// }

// const options = {
//   method: 'GET',
//   url: 'https://us-real-estate.p.rapidapi.com/v2/for-sale',
//   params: { offset: '0', limit: '42', state_code: 'MI', city: 'Detroit', sort: 'newest' },
//   headers: {
//     'X-RapidAPI-Key': 'de2aefe3abmsh1b65c2ddfb873dbp1fa161jsnab8021a033ab',
//     'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com'
//   }
// };


function App() {
  const [data, setData] = useState([])
  const [slicer, setSlicer] = useState(true)

  const [toggle, setToggle] = useState(false)
  function toggleMenu() {
    setToggle(prev => !prev)
  }



  // console.log(data)
  return (
    <div className={!toggle ? "App  min-h-screen  overflow-hidden" : " relative max-h-screen  overflow-hidden"}>
      <Nav toggle={toggle} setMenu={setToggle} toggleMenu={toggleMenu} />

      <Routes>
        <Route path='/' element={<Cardscontainer data={data} setData={setData}
        slicer={slicer} setSlicer = {setSlicer}
        />}>
        </Route>
        <Route path='/:id' element={<Details />}>
        </Route>
        <Route path='/rent-all' element={<All_Rent />}>
        </Route>
        <Route path='/sale-all' element={<All_Sale />}>
        </Route>
      </Routes>
      <Modal toggle={toggle} toggleMenu={toggleMenu} />
      <Footer />
    </div>
  );
}

export default App;
