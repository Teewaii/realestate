import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import Tools from './components/tools/Tools';
import Socials from './components/socials/Socials';
function App() {
  const [toggle, setToggle] = useState(true)

  function toggleMenu() {
    setToggle(prev => !prev);
  }
  return (
    <div className="App">
      <Nav
        toggle={toggle}
        toggleMenu={toggleMenu}
      />
      <Socials />
      <Tools/>
      <Hero
        toggle={toggle}
        toggleMenu={toggleMenu} />
      {/* <Tools/> */}
      <About />

      {/*<Projects/> */}
      {!toggle &&
        <div className="overlay bg-primary opacity-[0.8]  absolute top-0 left-0 right-0 bottom-0" onClick={toggleMenu}></div>}
    </div>
  );
}

export default App;
