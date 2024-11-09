import React from 'react'
import AboutHomePage from './AboutHomePage'
import AboutStory from './AboutStory'
import DentalPractice from './DentalPractice'
import Excellence from './Excellence'
import Gallery from './Gallery'
import PreFooter from './PreFooter'
import Footer from "../../components/Footer"
import ScrollToTop from '../../ScrollTop'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const AboutPage = () => {
  const galleryImages = [
    {
      img : "https://websitedemos.net/dentalist-04/wp-content/uploads/sites/1441/2024/01/gallery-01.jpg"
    },
    {
      img : "https://websitedemos.net/dentalist-04/wp-content/uploads/sites/1441/2024/01/gallery-02.jpg"
    },
    {
      img : "https://websitedemos.net/dentalist-04/wp-content/uploads/sites/1441/2024/01/gallery-05.jpg"
    },
    {
      img : "https://websitedemos.net/dentalist-04/wp-content/uploads/sites/1441/2024/01/gallery-04.jpg"
    },
    {
      img : "https://websitedemos.net/dentalist-04/wp-content/uploads/sites/1441/2024/01/gallery-07.jpg"
    },
    {
      img : "https://websitedemos.net/dentalist-04/wp-content/uploads/sites/1441/2024/01/gallery-06.jpg"
    },
    {
      img : "https://websitedemos.net/dentalist-04/wp-content/uploads/sites/1441/2024/01/gallery-03.jpg"
    },
    {
      img : "https://plus.unsplash.com/premium_photo-1661672241644-ba6dbc74ec3c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }

  ]

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
    <div className="about-page-container" id='top'>
        <AboutHomePage />
        <AboutStory />
        <DentalPractice />
        <Excellence />
        <Gallery galleryImages = {galleryImages} />
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

export default AboutPage