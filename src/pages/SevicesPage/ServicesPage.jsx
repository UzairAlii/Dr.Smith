import React from 'react'
import ServiceHomePage from './ServiceHomePage'
import AllServices from './AllServices'
import PreFooter from '../AboutPage/PreFooter'
import Footer from '../../components/Footer'
import ScrollToTop from '../../ScrollTop'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const ServicesPage = () => {

  
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
    <div className='ServicesPage-container' id='top'>
      <ServiceHomePage />
      <AllServices />
      <PreFooter />

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

      <ScrollToTop />
        <Outlet />
      <Footer />
    </div>
  )
}

export default ServicesPage