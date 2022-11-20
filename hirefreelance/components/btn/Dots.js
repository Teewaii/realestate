// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Link from 'next/link';


function Dots() {
  return (
    <div className='fixed right-8 top-[50%]'>
        <ul className=' flex flex-col items-center  '>
                        <li className='cursor-pointer dots text-white lg:text-body py-2 pl-12 lg:pl-0 '>
                            {/* <Link activeClass="active" to="features" spy={true} smooth={true} offset={0} duration={500} ><span className='  rounded-full bg-black py-[0.2px] px-[4px]'></span></Link> */}
                        <Link href='#values'><span className='  rounded-full bg-black py-[0.2px] px-[4px]'></span></Link>
                        </li>
                        <li className='cursor-pointer dots text-white lg:text-body py-2 pl-12 lg:pl-0 '>
                            {/* <Link activeClass="active" to="values" spy={true} smooth={true} offset={0} duration={500}><span className='  rounded-full bg-black py-[0.2px] px-[4px]'></span></Link> */}
                            <Link href='#service'><span className='  rounded-full bg-black py-[0.2px] px-[4px]'></span></Link>
                        </li>
                        <li className='cursor-pointer dots text-white lg:text-body py-2 pl-12 lg:pl-0 '>
                            {/* <Link activeClass="active" to="hero" spy={true} smooth={true} offset={0} duration={500}><span className='  rounded-full bg-black py-[0.2px] px-[4px]'></span></Link>*/}
                            <Link href='#hero'><span className='  rounded-full bg-black py-[0.2px] px-[4px]'></span></Link>
                        </li> 

                    </ul>
    </div>
  )
}

export default Dots