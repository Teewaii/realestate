
import Image from 'next/image';
import logo from '../../public/img/LogoBlue.svg';
import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid'


function Hamburger({toggle,OpenMenu}) {
    return (
        <div className="z-[600] container mobMenu flex items-center justify-between py-5 absolute top-0 left-0 right-0 lg:hidden">
            <Link href='/'><Image className='w-20' src={logo} alt='logo'
            /></Link>
            <div className="openClose flex ">
                {toggle ?<Bars3Icon onClick={OpenMenu} className='cursor-pointer w-8 fill-primary' />:
                <XMarkIcon onClick={OpenMenu} className='cursor-pointer w-8 fill-white' />}
            </div>

        </div>
    )
}

export default Hamburger