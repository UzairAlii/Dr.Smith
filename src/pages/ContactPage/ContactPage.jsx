import React from 'react'
import ContactHomePage from './ContactHomePage'
import ContactItems from './ContactItems'
import ContactFormMap from './ContactFormMap'
import Footer from '../../components/Footer'
import ScrollToTop from "../../ScrollTop"
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const ContactPage = () => {

   
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
    <div className='ContactPage-container' id='top'>
      <ContactHomePage />
      <ContactItems />
      <ContactFormMap />

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

export default ContactPage