import Image from 'next/image';
// import logo from '../public/img/LogoBlue.svg'
import logo from '../../public/img/LogoBlue.svg'
import logomob from '../../public/img/LogoWhite.svg'
// import Link from 'next/link';
import Btn from '../btn/Btn';
import { Bars3Icon } from '@heroicons/react/24/solid'
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'




function Nav({toggle,OpenMenu}) {

    return (
       <nav className={toggle?' bg-primary hidden lg:flex h-screen lg:h-fit py-4 absolute  left-0 right-[35%] top-0 lg:right-0 lg:top-6 lg:bg-transparent lg:py-0  ':'z-[200] bg-primary h-screen lg:h-fit py-4 absolute  left-0 right-[35%] top-0 lg:right-0 lg:top-6 lg:bg-transparent lg:py-0 transition-all duration-300 ease-in-out '}> 
            <div className="navWrapper  space-y-16 container lg:flex lg:items-center lg:justify-between lg:space-y-0 ">
                <div className="logo  w-fit ">
                   <Image src={logo} alt='logo'
                    />
                    {/* <Link href='/'><Image src={logo} alt='logo'
                    /></Link> */}
                </div>
                <div className="links ">
                    <ul className='space-y-3  lg:flex lg:space-x-[36px] lg:space-y-0 items-center'>
                        <li className='cursor-pointer text-white lg:text-body py-2 pl-12 lg:pl-0 '>
                            <Link activeClass="active" to="services" spy={true} smooth={true} offset={0} duration={500} >Services</Link>
                        </li>
                        <li className='cursor-pointer text-white lg:text-body py-2 pl-12 lg:pl-0 '>
                            <Link activeClass="active" to="values" spy={true} smooth={true} offset={0} duration={500}>About us</Link>
                        </li>
                        <li className='cursor-pointer text-white lg:text-body py-2 pl-12 lg:pl-0 '>
                            <Link activeClass="active" to="features" spy={true} smooth={true} offset={0} duration={500}>Blog</Link>
                        </li>

                    </ul>
                    {/* <ul className='space-y-3  lg:flex lg:space-x-[36px] lg:space-y-0 items-center'>
                        <li className='text-white lg:text-body py-2 pl-12 lg:pl-0 '>
                            <Link href='#service'>Services</Link>
                        </li>
                        <li className='text-white lg:text-body py-2 pl-12 lg:pl-0 '>
                            <Link href='#about'>About us</Link>
                        </li>
                        <li className='text-white lg:text-body py-2 pl-12 lg:pl-0 '>
                            <Link href='#Blog'>Blog</Link>
                        </li>

                    </ul> */}

                </div>
                <div className="rightSide">
                    <div className="language"></div>
                    <div className="contact pl-12 lg:pl-0">
                        <Btn />
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Nav


{/* <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
Test 1
</Link> */}