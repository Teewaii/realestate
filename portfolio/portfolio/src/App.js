import {Routes, Route} from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
function App() {
  const[toggle, setToggle] = useState(true)
  
  function toggleMenu(){
    setToggle(prev=>!prev);
  }
  return (
    <div className="App">
      <Nav
      toggle={toggle}
      toggleMenu={toggleMenu}
      />
     {/* <Hero/>
     <About/>
     <Projects/> */}
    </div>
  );
}

export default App;
