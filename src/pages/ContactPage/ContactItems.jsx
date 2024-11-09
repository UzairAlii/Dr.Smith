import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


const ContactItems = () => {

    
  useGSAP(() => {
    gsap.from(".location", {
      y: 100,
      delay: .2,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".location"
      }
    })
    gsap.from(".workingHours", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".workingHours"
      }
    })
    gsap.from(".phone", {
      y: 100,
      delay: .8,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".phone"
      }
    })
    gsap.from(".email", {
      y: 100,
      delay: 1.1,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".email"
      }
    })

  })


  return (
    <div className='ContactItems'>
        <div className="contact-info location">
            <h3>01</h3>
            <h2>Location</h2>
            <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
        </div>
        <div className="contact-info workingHours">
            <h3>02</h3>
            <h2>Working Hours</h2>
            <p>Mon-Fri = 09.00am - 07.00pm</p>
            <p>Sat-Sun = 11.00am - 10.00pm</p>
        </div>
        <div className="contact-info phone">
            <h3>03</h3>
            <h2>Phone</h2>
            <p>(303) 555-0105</p>
        </div>
        <div className="contact-info email">
            <h3>04</h3>
            <h2>Email</h2>
            <p>dentist@example.com</p>
        </div>
    </div>
  )
}

export default ContactItems