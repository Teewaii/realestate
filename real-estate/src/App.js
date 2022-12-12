
import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import PropertyCard from './components/PropertyCard';
import Modal from './components/Modal';
import HeaderSlider from './components/HeaderSlider';


function App() {

  const [toggle, setToggle] = useState(false)
  function toggleMenu() {
    setToggle(prev => !prev)
  }
  return (
    <div className="App relativeh-screen ">
      <Nav toggle={toggle} setMenu={setToggle} toggleMenu={toggleMenu} />
      <HeaderSlider />
      <PropertyCard />
      <Modal toggle={toggle} toggleMenu={toggleMenu} />
    </div>
  );
}

export default App;
