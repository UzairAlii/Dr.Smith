import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import stars from "../images/stars.svg"
import testimonialsImg from "../images/testimonialsImg.jpg"
import reviewBoxOne from "../images/reviewImg-1.jpg"
import reviewBoxTwo from "../images/reviewImg-2.jpg"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


const Testimonials = () => {

    useGSAP(() => {
        gsap.from(".testimonials-container h3", {
          y: 100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".testimonials-container h3"
          }
        })
        gsap.from(".testimonials-container h1", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".testimonials-container h1"
          }
        })
        gsap.from(".testimonials-container svg", {
          y: -100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".testimonials-container svg"
          }
        })
        
        gsap.from(".review-boxes > img", {
          y: -100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".review-box-1 > img"
          }
        })
        gsap.from(".star-box", {
          y: 100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".star-box"
          }
        })
        gsap.from(".review-box-items> p", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".review-box-items > p"
          }
        })
        gsap.from(".review-box-items> .name", {
          y: 100,
          delay: .8,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".review-box-items > .name"
          }
        })
        
        gsap.from(".testimonials-img", {
          x: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".testimonials-img"
          }
        })
        
    
    
      })
    

  return (
    <div className='testimonials-container'>
        <h3>Testimonials</h3>
        <h1>As someone who has always been anxious about dental visits, Dr. Smith's patient-centered approach and gentle demeanor instantly put me at ease...</h1>
        <svg id='double-quote' aria-hidden="true" class="e-font-icon-svg e-fas-quote-right" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path></svg>


        <div className="testimonials-items">



            <div className="review-boxes-container">
                <div className="review-box-1 review-boxes">
                    <img src={reviewBoxOne} alt="" />
                    <div className="review-box-items">
                        <div className="star-box">
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                        </div>
                        <p>The entire staff goes above and beyond to create a welcoming atmosphere. The quality of care and attention to detail is unmatched. Thanks to Dr. Smith's expertise, my smile has been transformed, and I now look forward to my dental visits. I highly recommend Dr. Smith's Dental Care to anyone seeking top-notch dental services with a personal touch.</p>
                        <div className="name">Jennifer Oliver</div>
                    </div>
                </div>
                <div className="review-box-2 review-boxes">
                    <img src={reviewBoxTwo} alt="" />
                    <div className="review-box-items">
                        <div className="star-box">
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                            <img src={stars} alt="" />
                        </div>
                        <p>The team's commitment to education and explaining each step of the process made me feel involved and informed. From routine cleanings to more complex procedures, Dr. Smith's skill and dedication shine through. I appreciate the friendly and caring environment they've created, making every visit a positive experience. If you're looking for a dental home that combines expertise with a personal touch, Dr. Smith's Dental Care is the place to go.</p>
                        <div className="name">Maria Thompson</div>
                    </div>
                </div>
            </div>



            <div className="testimonials-img">
                <img src={testimonialsImg} alt="" />
            </div>
        </div>


    </div>
  )
}

export default Testimonials