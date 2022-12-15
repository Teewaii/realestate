import React from 'react'

function Footer() {
  return (
    <section className="footer bg-gray-600 h-[fit] py-10 lg:py-8">
    <div className='container flex flex-wrap gap-y-6 items-center justify-between'>

       <div className="HomeFast flex flex-col items-start ">
        <p className='text-lg text-white mb-2 font-medium '>Homefast</p>
        <ul className='text-left text-gray-300 space-y-1 text-sm'>
            <li className='hover:text-white'> <a href="#"> About Us </a></li>
            <li className='hover:text-white'> <a href="#"> Our Awards </a></li>
            <li className='hover:text-white'> <a href="#"> Corporate Materials </a></li>
            <li className='hover:text-white'> <a href="#"> Advertisement </a></li>
            <li className='hover:text-white'> <a href="#"> Human Resources </a></li>
            <li className='hover:text-white'> <a href="#"> Sitemap </a></li>
        </ul>
        </div> 

       <div className="other flex flex-col items-start ">
        <p className='text-lg text-white mb-2 font-medium '>Homefast</p>
        <ul className='text-left text-gray-300 space-y-1 text-sm'>
            <li className='hover:text-white'> <a href="#"> Our Special Services </a></li>
            <li className='hover:text-white'> <a href="#"> Membership </a></li>
            <li className='hover:text-white'> <a href="#"> Corporate Membership </a></li>
            <li className='hover:text-white'> <a href="#"> Projects </a></li>
            <li className='hover:text-white'> <a href="#"> Advertise For Free </a></li>
            <li className='hover:text-white'> <a href="#"> Search On Map </a></li>
        </ul>
        </div> 

       <div className="Our-Services flex flex-col items-start ">
        <p className='text-lg text-white mb-2 font-medium '>Other</p>
        <ul className='text-left text-gray-300 space-y-1 text-sm'>
            <li className='hover:text-white'> <a href="#">Posting Rules </a> </li>
            <li className='hover:text-white'> <a href="#">Terms of Use </a> </li>
            <li className='hover:text-white'> <a href="#">Membership Agreement and Privacy Policy </a> </li>
            <li className='hover:text-white'> <a href="#">Operation Guide </a> </li>
            <li className='hover:text-white'> <a href="#">Cookie Policy </a> </li>
            <li className='hover:text-white'> <a href="#">About Protection of Personal Data </a> </li>
        </ul>
        </div> 


        </div>
    </section>
  
  )
}

export default Footer