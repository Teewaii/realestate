
import './App.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import PropertyCard from './components/PropertyCard';
import Modal from './components/Modal';
import Heroslider from './components/Heroslider';
import Cardscontainer from './components/Cardscontainer';
import Details from './components/Details';
import Footer from './components/Footer';
import All_Rent from './routes/All_Rent';
import All_Sale from './routes/All_Sale';



function App() {
  const [data, setData] = useState([])

  const [toggle, setToggle] = useState(false)
  function toggleMenu() {
    setToggle(prev => !prev)
  }
  return (
    <div className={!toggle ? "App  min-h-screen  overflow-hidden" : " relative max-h-screen  overflow-hidden"}>
      <Nav toggle={toggle} setMenu={setToggle} toggleMenu={toggleMenu} />
      
    <Routes>
     <Route path='/' element={ <Cardscontainer data={data} setData={setData}/>}>
     </Route>
     <Route path='/:id' element={ <Details/>}>
     </Route>
     <Route path='/rent-all' element={<All_Rent/>}>
    </Route>
     <Route path='/sale-all' element={ <All_Sale/>}>
    </Route>
      </Routes>
       <Modal toggle={toggle} toggleMenu={toggleMenu} />
       <Footer/>
    </div>
  );
}

export default App;
