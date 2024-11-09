import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const About = () => {

  useGSAP(() => {
    gsap.from(".about-box > h3", {
      y: 100,
      delay: .2,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".about-box > h3"
      }
    })
    gsap.from(".about-box > h1", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".about-box > h1"
      }
    })
    gsap.from(".about-box > p", {
      y: 100,
      delay: .8,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".about-box > p"
      }
    })
    gsap.from(".about-box > button", {
      y: 100,
      delay: .1,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".about-box > button"
      }
    })
    gsap.from(".about-img", {
      x: 100,
      delay: .2,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".about-img"
      }
    })



  })

  return (
    <div className="about-container">
      <div>
        <div className="about-box">
          <h3>ABOUT</h3>
          <h1>Dr. Smith, a distinguished dentist...</h1>
          <p>Dr. Smith completed her dental education with honors, specializing in specific areas of focus. Her dedication to staying updated with the latest in dentistry ensures that you receive the highest standard of care. Beyond technical proficiency, Dr. Smith’s warm and approachable demeanor establishes a welcoming atmosphere, making each visit a positive and personalized experience</p>
          <button>READ MORE</button>
        </div>
        <div className="about-img">

        </div>
        </div>
    </div>
  )
}

export default About