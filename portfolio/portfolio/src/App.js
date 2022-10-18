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
      {/* <Nav
      toggle={toggle}
      toggleMenu={toggleMenu}
      /> */}
      <Hero
      toggle={toggle}
      toggleMenu={toggleMenu}/>
     {/*<About/>
     <Projects/> */}
     {!toggle &&
     <div className="overlay bg-primary opacity-[0.2] blur-xl absolute top-0 left-0 right-0 bottom-0"></div>}
    </div>
  );
}

export default App;
