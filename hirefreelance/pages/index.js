import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';
import Hamburger from '../components/hamburger/Hamburger';
import Nav from '../components/nav/Nav'
import logo from '../public/img/LogoBlue.svg'
import Hero from '../components/hero/Hero';
import Values from '../components/values/Values';
import Journey from '../components/journey/Journey';
import Features from '../components/features/Features';
import Footer from '../components/footer/Footer';
import ScrollToTop from "react-scroll-to-top";
import Totop from '../components/btn/Totop';
import Agents from '../components/agents/Agents';
import Services from '../components/services/Services';
import Testimonials from '../components/testimonials/Testimonials';


export default function Home() {
  const [toggle, setToggle] = useState(true)

  function OpenMenu() {
    setToggle(prev => !prev)
  }
  return (
    <div className='relative'>
      <Head>
        <title>Freelance Hire</title>
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        </style>
      </Head>

      <Nav
        toggle={toggle}
        OpenMenu={OpenMenu} />
      <div className="mob">
        <Hamburger
          toggle={toggle}
          OpenMenu={OpenMenu}
        />
      </div>
      <Hero />
      <Values />
      <Journey />
      <Features />
      <Services />
      <Testimonials />
      <Agents />
      <Footer />
      {/* <ScrollToTop smooth /> */}
      <Totop />

      {!toggle && <div onClick={() => setToggle(true)} className="overlay absolute top-0 bottom-0 left-0 right-0 bg-primary opacity-60  lg:hidden"></div>}

    </div>
  )
}
