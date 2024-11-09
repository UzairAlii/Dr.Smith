import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import chooseImg from "../images/choose-us.jpg"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const ChooseUs = () => {

  useGSAP(() => {
    gsap.from(".chooseus-items h3", {
      y: 100,
      delay: .2,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".chooseus-items h3"
      }
    })
    gsap.from(".chooseus-items h1", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".chooseus-items h1"
      }
    })
    gsap.from(".line-1", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrub : 1,
      scrollTrigger: {
        trigger: ".line-1"
      }
    })
    gsap.from(".line-2", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".line-2"
      }
    })
    gsap.from(".line-3", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".line-3"
      }
    })
    


  })

  return (
    <div className='ChooseUs-container'>
        <div>
        <div className="chooseus-items">
          <h3>Why Choose Us</h3>
          <h1>Choose us for a dental home where you can feel relaxed</h1>
          <div className="choose-lines">
            <div className="line-1 lines">
              <FontAwesomeIcon icon={faCheck} className='tick-icon' />
              <div className="lines-items">
                <h2>Patient-Centric Approach</h2>
                <p>Our patient-centric approach means that your comfort, concerns, and individual needs are our priority.</p>
              </div>
            </div>
            <div className="line-2 lines">
              <FontAwesomeIcon icon={faCheck} className='tick-icon' />
              <div className="lines-items">
                <h2>State-of-the-Art Technology</h2>
                <p>From digital diagnostics to advanced treatment modalities, we leverage state-of-the-art tools to enhance precision, efficiency, and your overall experience.</p>
              </div>
            </div>
            <div className="line-3 lines">
              <FontAwesomeIcon icon={faCheck} className='tick-icon' />
              <div className="lines-items">
                <h2>Expertise You Can Trust</h2>
                <p>With a combination of experience and ongoing education, we deliver top-notch, evidence-based care that you can trust for all your dental needs.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="chooseus-img">
          {/* <img src={chooseImg} alt="" /> */}
        </div>
        </div>
    </div>
  )
}

export default ChooseUs