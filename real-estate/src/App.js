
import './App.css';
import { useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav';
import PropertyCard from './components/PropertyCard';
import Modal from './components/Modal';
import Heroslider from './components/Heroslider';
import Cardscontainer from './components/Cardscontainer';
import Details from './components/Details';



function App() {
  const [data, setData] = useState([])

  const [toggle, setToggle] = useState(false)
  function toggleMenu() {
    setToggle(prev => !prev)
  }
  return (
    <div className={!toggle ? "App  min-h-screen  overflow-hidden" : " relative max-h-screen  overflow-hidden"}>
      <Nav toggle={toggle} setMenu={setToggle} toggleMenu={toggleMenu} />
      {/* <Heroslider /> */}
    <Routes>
     <Route path='/' element={ <Cardscontainer data={data} setData={setData}/>}>
     </Route>
     <Route path='/:name' element={ <Details/>}>
     </Route>
      </Routes>
       <Modal toggle={toggle} toggleMenu={toggleMenu} />

    </div>
  );
}

export default App;
