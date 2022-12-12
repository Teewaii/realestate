import React from 'react'

function Modal({toggle}) {
  return (
    <div className={!toggle?'absolute bg-black left-0 right-0 top-0 bottom-0 opacity-50  ':'hidden'}>
        hello
    </div>
  )
}

export default Modal