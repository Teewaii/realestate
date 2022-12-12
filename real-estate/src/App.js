
import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import PropertyCard from './components/PropertyCard';
import Modal from './components/Modal';

function App() {

  const [toggle,setToggle] = useState(false)
  function toggleMenu() {
    setToggle(prev=>!prev)
        }
  return (
    <div className="App relativeh-screen bg-red-500">
     <Nav toggle={toggle} setMenu={setToggle} toggleMenu={toggleMenu}/>
     <PropertyCard/>
     <Modal toggle={toggle}/>
    </div>
  );
}

export default App;
