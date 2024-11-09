import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const AboutStory = () => {

  useGSAP(() => {
    gsap.from(".ourStory > h3", {
      y: 100,
      delay: .2,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".ourStory > h3"
      }
    })
    gsap.from(".our-story-headings > h1", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".our-story-headings > h1"
      }
    })
    gsap.from(".our-story-headings > p", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".our-story-headings > p"
      }
    })
    gsap.from(".paraas > p", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".paraas > p"
      }
    })



  })

  return (
    <div className="ourStory">
        <h3>Our Story</h3>
        <div className="our-story-headings">
            <h1>Welcome to Dr. Smith's Dental Care, where our story unfolds through a tapestry of passion, commitment, and the artistry of dentistry.</h1>
            <p>Our Journey: Crafting Smiles, Building Connections</p>
        </div>
        <div className="our-story-items">
            <div className="seperator"></div>
            <div className="paraas">
            <p>Founded by the visionary Dr. Emily Smith, our practice embodies a vision where exceptional dental care harmonizes with a warm, patient-centric ethos. Dr. Smith’s odyssey in dentistry is marked by an unwavering pursuit of excellence. Following extensive education and specialized training, Dr. Smith embarked on the mission to establish a dental practice that transcends routine check-ups and procedures. Our goal is to craft smiles, with each treatment uniquely tailored to our patients.</p>
            <p>What distinguishes us is not only our expertise but the authentic care we extend to our patients. From the moment you step into our practice, you become a cherished member of the Dr. Smith’s Dental Care family.</p>
            <p>We recognize that every smile holds a unique narrative, and we take the time to listen, comprehend your aspirations, and customize our approach to your distinct needs.</p>
            <p>Our cohesive team, inspired by Dr. Smith’s leadership, shares an unwavering commitment to delivering the highest standard of care. We invest in cutting-edge technology, stay abreast of the latest dental advancements, and continuously elevate our skills to ensure you receive optimal treatment.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutStory