import React, { useState } from 'react';
import logo from "../images/Navlogo.svg";
import HomeImage from "../images/homePageImg.jpeg";
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const ToggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
    gsap.from(".homePage-items > h3", {
      y: 100,
      delay: .2,
      duration: 1,
      opacity: 0
    })
    gsap.from(".homePage-items > h1", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0
    })
    gsap.from(".homePage-items > p", {
      y: 100,
      delay: .8,
      duration: 1,
      opacity: 0
    })
    gsap.from(".homePage-items > button", {
      y: 100,
      delay: 1.1,
      duration: 1,
      opacity: 0
    })



  })

  return (
    <div className="HomePage-container">
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
            <button onClick={() => setIsMenuOpen(false)}>BOOK NOW</button>
          </AnchorLink>
        </ul>
        <FontAwesomeIcon
          id='menu-icon'
          icon={isMenuOpen ? faClose : faBars}
          onClick={ToggleNav}
        />
      </nav>

      <div className="homePage-items">
        <h3>Welcome to Dr. Smith's Dental Care</h3>
        <h1>Dr. Smith's Dental Care – Where Your Smile Takes Center Stage!</h1>
        <p>Experience personalized and compassionate dental care with Dr. Smith and our dedicated team!</p>
        <button>SMILE CONSULTATION</button>
      </div>

      <div className="home-page-img">
        <img src={HomeImage} alt="" />
      </div>
    </div>
  );
}

export default HomePage;
