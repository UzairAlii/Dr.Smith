import React from 'react'
import logo from "../images/logo.svg"
import fb from "../images/fb.svg"
import youtube from "../images/youtube.svg"
import pinterest from "../images/pinterest.svg"
import twitter from "../images/twitter.svg"
import insta from "../images/insta.svg"
import { Link, useLocation } from 'react-router-dom'

const Footer = () => {

  const location = useLocation()

  const handleLinkClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  };

  return (
    <div className='footer-container'>
      <div className="footer">
        <img className='footer-logo' src={logo} />
        <ul>
          <li>
            <Link
              onClick={handleLinkClick}
              className={location.pathname === "/" ? "active" : ""}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLinkClick}
              className={location.pathname === "/About" ? "active" : ""}
              to="/About"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLinkClick}
              className={location.pathname === "/Services" ? "active" : ""}
              to="/Services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              onClick={handleLinkClick}
              className={location.pathname === "/Contact" ? "active" : ""}
              to="/Contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="footer-icons">
          <a href="https://www.facebook.com" target="_blank">
            <img id="fb" src={fb} alt="Facebook Logo" />
          </a>

          <a href="https://www.youtube.com" target="_blank">
            <img id="youtube" src={youtube} alt="YouTube Logo" />
          </a>

          <a href="https://www.pinterest.com" target="_blank">
            <img id="pinterest" src={pinterest} alt="Pinterest Logo" />
          </a>

          <a href="https://www.twitter.com" target="_blank">
            <img id="twitter" src={twitter} alt="X (Twitter) Logo" />
          </a>

          <a href="https://www.instagram.com" target="_blank">
            <img id="insta" src={insta} alt="Instagram Logo" />
          </a>

        </div>
      </div>
      <div className="footer-last">
        <p>© Copyright 2024 by <span>Syed Uzair Ali.</span> | All Rights Reserved </p>
      </div>
    </div>
  )
}

export default Footer