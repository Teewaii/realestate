import React from 'react'
import {ChevronDoubleUpIcon} from '@heroicons/react/24/solid';
import { useState } from 'react';

function Totop() {
    function scrollTop(){
        window.scrollTo(0,0)
    }

    const [scroller, setScroller] = useState(false);
  function Scroller() {
    if (window.scrollY >= 150) {
        setScroller(true)
    } else {
        setScroller(false)
    }
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', Scroller)
  }
  

  


  return (
  
    <div onClick={scrollTop} className={scroller?"scroll fixed bottom-[5%] right-8 p-2 bg-primary cursor-pointer rounded-full z-[300] border-2 border-opacity-30 border-white ":" hidden"}>
        <ChevronDoubleUpIcon
        className='w-4 fill-white'
        />
    </div>
  )
}

export default Totop