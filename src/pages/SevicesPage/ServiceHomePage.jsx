import React from 'react'
import logo from "../../images/Navlogo.svg"
import { NavLink } from 'react-router-dom'
import ServiceHomePageImg from "../../images/serviceHomePage.png"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


const ServiceHomePage = () => {

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
    gsap.from(".ServiceHomePage-items > h3", {
      y: 100,
      delay: .2,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".ServiceHomePage-items > h3"
      }
    })
    gsap.from(".ServiceHomePage-items > h1", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".ServiceHomePage-items > h1"
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
    <div className='ServiceHomePage-container'>

      <nav>
        <img src={logo} className='logo' alt="Logo" />
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

      <div className="ServiceHomePage-items">
        <h3>Services</h3>
        <h1>Welcome to Our Comprehensive Dental Services</h1>


      </div>

      <div className="ServiceHomePage-img">
        <img src={ServiceHomePageImg} alt="" />
      </div>

    </div>
  )
}

export default ServiceHomePage