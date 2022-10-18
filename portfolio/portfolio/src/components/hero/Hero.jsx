import React from 'react'
import Nav from '../../components/nav/Nav';

export default function Hello({ toggle, toggleMenu}) {
  return (

<section className='hero h-[100vh] bg-hero-right-mob  bg-contain bg-right-top bg-no-repeat  border-2
md:bg-hero-right-lg 
'>
<Nav
      toggle={toggle}
      toggleMenu={toggleMenu}
      />
    <div >
      
    </div>
    </section>
  )
}
