import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


const Excellence = () => {

    useGSAP(() => {
        gsap.from(".left-excellence > h3", {
          y: 100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".left-excellence > h3"
          }
        })
        gsap.from(".left-excellence > h1", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".left-excellence > h1"
          }
        })
        gsap.from(".excellence-box-1 > h3", {
          y: 100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".excellence-box-1 > h3"
          }
        })
        gsap.from(".excellence-box-1 > p", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".excellence-box-1 > p"
          }
        })
        gsap.from(".excellence-box-2 > h3", {
          y: 100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".excellence-box-2 > h3"
          }
        })
        gsap.from(".excellence-box-2 > p", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".excellence-box-2 > p"
          }
        })
    
      })
    

  return (
    <div className="Excellence-container">
        <div className="left-excellence">
            <h3>committing to excellence</h3>
            <h1>Top-tier dental care that goes beyond the ordinary</h1>
        </div>



        <div className="right-excellence">
            <div className="excellence-box-1 excellence-boxes">
                <h3>Our Vision</h3>
                <p>Our vision at Dr. Smith's Dental Care is to be a beacon of excellence in the field of dentistry, where innovation, personalized care, and community thrive. We aspire to set new standards in oral health, inspiring smiles that radiate confidence and joy. With a commitment to continuous improvement, we envision a future where every patient experiences the transformative power of a healthy, well-cared-for smile.</p>
            </div>
            <div className="excellence-box-2 excellence-boxes">
                <h3>Our Mission</h3>
                <p>At Dr. Smith's Dental Care, our mission is to empower individuals on their journey to optimal oral health. We are dedicated to delivering exceptional, patient-centric dental care, fostering an environment of trust, education, and compassion. Our team is committed to crafting healthy, beautiful smiles that enhance overall well-being, leaving a lasting impact on the lives we touch.</p>
            </div>
        </div>
    </div>
  )
}

export default Excellence