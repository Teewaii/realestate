import React from 'react'

function Modal({ toggle, toggleMenu }) {
  return (
    <div onClick={toggleMenu} className={toggle ? 'absolute bg-black left-0 right-0 top-0 bottom-0 opacity-50 lg:hidden ' : 'hidden'}>

    </div>
  )
}

export default Modal