import React from 'react'
import './App.css'
import HomePage from './components/HomePage'
import About from './components/About'
import Services from './components/Services'
import ChooseUs from './components/ChooseUs'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './ScrollTop'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

function App() {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // Adjust this value based on when you want the button to appear
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  

  return (
    <div className="container" id='top'>
      <HomePage/>
      <About/>
      <Services/>
      <ChooseUs/>
      <Testimonials/>
      <Contact/>


      {isVisible && (
        <div className="scroll-to-top">
          <AnchorLink
            href="#top"
            className="scroll-button"
          >
            <FontAwesomeIcon id='top-arrow' icon={faChevronUp} />
          </AnchorLink>
        </div>
      )}

      <ScrollToTop/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
