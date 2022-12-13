
import './App.css';
import { useState } from 'react';
import Nav from './components/Nav';
import PropertyCard from './components/PropertyCard';
import Modal from './components/Modal';
import Heroslider from './components/Heroslider';



function App() {
  const [data,setData]=useState([])

  const [toggle, setToggle] = useState(false)
  function toggleMenu() {
    setToggle(prev => !prev)
  }
  return (
    <div className="App relative min-h-screen  overflow-hidden">
      <Nav toggle={toggle} setMenu={setToggle} toggleMenu={toggleMenu} />
     <Heroslider/>
      <PropertyCard data={data} setData={setData} />
      <Modal toggle={toggle} toggleMenu={toggleMenu} />
    </div>
  );
}

export default App;
