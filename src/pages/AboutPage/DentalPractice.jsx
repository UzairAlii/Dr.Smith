import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const dentalPractice = () => {

  useGSAP(() => {
    gsap.from(".dentalPractice > h3", {
      y: 100,
      delay: .2,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".dentalPractice > h3"
      }
    })
    gsap.from(".dentalPractice > h1", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".dentalPractice > h1"
      }
    })


  })

  return (
    <div className="dentalPractice">
        <h3>More than a dental practice</h3>
        <h1>In the realm of dentistry, where artistry meets science, every smile is a canvas, and every procedure is a brushstroke. Driven by the passion to sculpt perfection, we create masterpieces, one tooth at a time, unveiling the true art of a captivating smile.</h1>
    </div>
  )
}

export default dentalPractice