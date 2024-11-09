import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Services = () => {

    useGSAP(() => {
        gsap.from(".service-headings > h3", {
          y: 100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-headings > h3"
          }
        })
        gsap.from(".service-headings > h1", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-headings > h1"
          }
        })
        gsap.from(".service-box-1", {
          y: 100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-box-1"
          }
        })
        gsap.from(".service-box-2", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-box-2"
          }
        })
        gsap.from(".service-box-3", {
          y: 100,
          delay: .8,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-box-3"
          }
        })
        gsap.from(".service-box-4", {
          y: 100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-box-4"
          }
        })
        gsap.from(".service-box-5", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-box-5"
          }
        })
        gsap.from(".service-box-6", {
          y: 100,
          delay: .8,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-box-6"
          }
        })
        gsap.from(".service-bottom p", {
          y: 100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-bottom p"
          }
        })
        gsap.from(".service-bottom button", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-bottom button"
          }
        })
    
    
      })

  return (
    <div className='service-container'>
        <div>
        <div className="service-headings">
            <h3>Services</h3>
            <h1>Our diverse range of services</h1>
        </div>
        <div className="service-box-1 service-boxes">
            <h3>01</h3>
            <h2>Comprehensive Dental Exams</h2>
            <p>Ensure the longevity of your smile with our thorough dental exams. Our team is dedicated to detecting and preventing issues early.</p>
        </div>
        <div className="service-box-2 service-boxes">
            <h3>02</h3>
            <h2>Cosmetic Dentistry for a Radiant Smile</h2>
            <p>Ensure the longevity of your smile with our thorough dental exams. Our team is dedicated to detecting and preventing issues early.</p>
        </div>
        <div className="service-box-3 service-boxes">
            <h3>03</h3>
            <h2>Precision Restorative Dentistry</h2>
            <p>Our precise and customized treatments, including fillings and crowns, are designed to strengthen your teeth, ensuring both functionality and aesthetics.</p>
        </div>
        <div className="service-box-4 service-boxes">
            <h3>04</h3>
            <h2>Orthodontic Solutions for a Straighter Smile</h2>
            <p>From traditional braces to modern clear aligners, we offer personalized solutions to straighten your teeth, enhance your bite, and boost your overall oral health</p>
        </div>
        <div className="service-box-5 service-boxes">
            <h3>05</h3>
            <h2>Paediatric Dentistry for Growing Smiles</h2>
            <p>Ensure the longevity of your smile with our thorough dental exams. Our team is dedicated to detecting and preventing issues early.</p>
        </div>
        <div className="service-box-6 service-boxes">
            <h3>06</h3>
            <h2>Dental Implants for Lasting Solutions</h2>
            <p>Our precise and customized treatments, including fillings and crowns, are designed to strengthen your teeth, ensuring both functionality and aesthetics.</p>
        </div>
        <div className="service-bottom">
            <p>Ensure the longevity of your smile with our thorough dental exams. Our team is dedicated to detecting and preventing issues early.</p>
            <button>All services</button>
        </div>
        </div>
    </div>

  )
}

export default Services