import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../images/Navlogo.svg"
import aboutHomePage from "../../images/aboutHomePage.png"
import lowerImageAboutHomePage from "../../images/lowerImageAboutHomePage.jpg"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


const AboutHomePage = () => {

  useGSAP(() => {
    gsap.from("nav", {
      y: -100,
      delay: .2,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "nav"
      }
    })
    gsap.from(".aboutHomePage-items h3", {
      y: 100,
      delay: .2,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".aboutHomePage-items h3"
      }
    })
    gsap.from(".aboutHomePage-items h1", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".aboutHomePage-items h1"
      }
    })
    gsap.from(".lowerImageAboutHomePage", {
      y: 100,
      delay: .2,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".lowerImageAboutHomePage"
      }
    })


  })


  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/');
    setTimeout(() => {
      window.location.hash = '#contact';
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ToggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="about-home-page-container">
      
      <nav>
        <img src={logo} className='logo' alt="Logo"/>
        <ul className={`menu ${isMenuOpen ? 'showMenu' : ''}`}>
          <li>
            <NavLink 
              className={(e) => e.isActive ? "active" : ""} 
              to="/"
              onClick={() => setIsMenuOpen(false)}  // Menu ko close karne ke liye
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={(e) => e.isActive ? "active" : ""} 
              to="/About"
              onClick={() => setIsMenuOpen(false)}  // Menu ko close karne ke liye
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={(e) => e.isActive ? "active" : ""} 
              to="/Services"
              onClick={() => setIsMenuOpen(false)}  // Menu ko close karne ke liye
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              className={(e) => e.isActive ? "active" : ""} 
              to="/Contact"
              onClick={() => setIsMenuOpen(false)}  // Menu ko close karne ke liye
            >
              Contact
            </NavLink>
          </li>
          <AnchorLink href='#contact'>
          <button onClick={() => {
              setIsMenuOpen(false);
              handleBookNow();
            }}>BOOK NOW</button>
          </AnchorLink>
        </ul>
        <FontAwesomeIcon
          id='menu-icon'
          icon={isMenuOpen ? faClose : faBars}
          onClick={ToggleNav}
        />
      </nav>

        <div className="aboutHomePage-items">
          <h3>About</h3>
          <h1>A healthy, radiant smile is a testament to overall well-being...</h1>

          
        </div>

        <div className="aboutHomePage-img">
          <img src={aboutHomePage} alt="" />
        </div>


        <div className="lowerImageAboutHomePage">
          <img src={lowerImageAboutHomePage} alt="" />
        </div>

    </div>
  )
}

export default AboutHomePage