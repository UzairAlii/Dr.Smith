import React from 'react'
import ServiceOne from "../../images/services-01.jpg"
import ServiceTwo from "../../images/services-02.jpg"
import ServiceThree from "../../images/services-03.jpg"
import ServiceFour from "../../images/services-04.jpg"
import ServiceFive from "../../images/services-05.jpg"
import ServiceSix from "../../images/services-06.jpg"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


const AllServices = () => {

    useGSAP(() => {
        gsap.from(".service-line-1 .headings > h3", {
          y: 100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-1 .headings > h3"
          }
        })
        gsap.from(".service-line-1 .headings > h2", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-1 .headings > h2"
          }
        })
        gsap.from(".service-line-1 > p", {
          y: 100,
          delay: .8,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-1 > p"
          }
        })
        gsap.from(".service-line-1 .service-img", {
          y: 100,
          delay: 1.1,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-1 .service-img"
          }
        })
    
        gsap.from(".service-line-2 .headings > h3", {
          y: 100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-2 .headings > h3"
          }
        })
        gsap.from(".service-line-2 .headings > h2", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-2 .headings > h2"
          }
        })
        gsap.from(".service-line-2 > p", {
          y: 100,
          delay: .8,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-2 > p"
          }
        })
        gsap.from(".service-line-2 .service-img", {
          y: 100,
          delay: 1.1,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-1 .service-img"
          }
        })
    
        gsap.from(".service-line-3 .headings > h3", {
          y: 100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-3 .headings > h3"
          }
        })
        gsap.from(".service-line-3 .headings > h2", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-3 .headings > h2"
          }
        })
        gsap.from(".service-line-3 > p", {
          y: 100,
          delay: .8,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-3 > p"
          }
        })
        gsap.from(".service-line-3 .service-img", {
          y: 100,
          delay: 1.1,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-3 .service-img"
          }
        })
    
    
        gsap.from(".service-line-4 .headings > h3", {
          y: 100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-4 .headings > h3"
          }
        })
        gsap.from(".service-line-4 .headings > h2", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-4 .headings > h2"
          }
        })
        gsap.from(".service-line-4 > p", {
          y: 100,
          delay: .8,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-4 > p"
          }
        })
        gsap.from(".service-line-4 .service-img", {
          y: 100,
          delay: 1.1,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-4 .service-img"
          }
        })
    
    
        gsap.from(".service-line-5 .headings > h3", {
          y: 100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-5 .headings > h3"
          }
        })
        gsap.from(".service-line-5 .headings > h2", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-5 .headings > h2"
          }
        })
        gsap.from(".service-line-5 > p", {
          y: 100,
          delay: .8,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-5 > p"
          }
        })
        gsap.from(".service-line-5 .service-img", {
          y: 100,
          delay: 1.1,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-5 .service-img"
          }
        })
    
        gsap.from(".service-line-6 .headings > h3", {
          y: 100,
          delay: .2,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-6 .headings > h3"
          }
        })
        gsap.from(".service-line-6 .headings > h2", {
          y: 100,
          delay: .5,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-6 .headings > h2"
          }
        })
        gsap.from(".service-line-6 > p", {
          y: 100,
          delay: .8,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-6 > p"
          }
        })
        gsap.from(".service-line-6 .service-img", {
          y: 100,
          delay: 1.1,
          duration: 1,
          opacity: 0,
          scrollTrigger: {
            trigger: ".service-line-6 .service-img"
          }
        })
    
      })

  return (
    <div className='All-services-container'>
        <div className="all-services">



            <div className="service-lines service-line-1">
                <div className="headings">
                    <h3>01</h3>
                    <h2>Comprehensive Dental Exams</h2>
                </div>
                <p>Embark on a journey to optimal oral health with our Comprehensive Dental Exams. At Dr. Smith’s Dental Care, our meticulous approach ensures a thorough assessment of your dental well-being. Through detailed examinations, we delve into the intricacies of your oral health, detecting potential issues before they escalate. Our skilled team, led by Dr. Smith, combines advanced diagnostics with a commitment to personalized care. From assessing gum health to identifying potential decay, our comprehensive exams pave the way for proactive and preventive dental solutions</p>
                <div className="service-img">
                    <img src={ServiceOne} alt="" />
                </div>
            </div>


            <div className="service-lines service-line-2">
                <div className="headings">
                    <h3>02</h3>
                    <h2>Cosmetic Dentistry for a Radiant Smile</h2>
                </div>
                <p>Elevate your confidence and transform your smile with our Cosmetic Dentistry services at Dr. Smith’s Dental Care. Dr. Smith, renowned for her artistic touch, crafts personalized solutions to enhance your natural beauty. From professional teeth whitening to porcelain veneers and complete smile makeovers, we tailor treatments to your unique needs. Our commitment extends beyond aesthetics; we prioritize functionality and oral health in every procedure. Uncover the potential of your radiant smile with modern techniques and a dedicated team.</p>
                <div className="service-img">
                    <img src={ServiceTwo} alt="" />
                </div>
            </div>



            <div className="service-lines service-line-3">
                <div className="headings">
                    <h3>03</h3>
                    <h2>Precision Restorative Dentistry</h2>
                </div>
                <p>Experience the art and precision of restorative dentistry at Dr. Smith’s Dental Care. Our skilled team, led by Dr. Smith, specializes in crafting customized solutions to repair and strengthen your teeth. From seamless fillings to expertly designed crowns, our approach goes beyond aesthetics, prioritizing both form and function. Using state-of-the-art techniques, we restore your smile with meticulous detail, ensuring a natural and lasting outcome. Trust in our commitment to precision, and rediscover the joy of a healthy, functional, and aesthetically pleasing smile</p>
                <div className="service-img">
                    <img src={ServiceThree} alt="" />
                </div>
            </div>



            <div className="service-lines service-line-4">
                <div className="headings">
                    <h3>04</h3>
                    <h2>Orthodontic Solutions for a Straighter Smile</h2>
                </div>
                <p>Embark on a journey to a straighter, more confident smile with our Orthodontic Solutions at Dr. Smith’s Dental Care. Led by Dr. Smith, our expert team offers personalized orthodontic treatments tailored to your unique needs. From traditional braces to modern clear aligners, we provide effective solutions for alignment issues. Our approach goes beyond aesthetics, focusing on improving overall oral health and functionality. With advanced techniques and compassionate care, we guide you through the process of achieving a well-aligned and radiant smile.</p>
                <div className="service-img">
                    <img src={ServiceFour} alt="" />
                </div>
            </div>



            <div className="service-lines service-line-5">
                <div className="headings">
                    <h3>05</h3>
                    <h2>Paediatric Dentistry for Growing Smiles</h2>
                </div>
                <p>Nurture your child’s oral health with our specialized Pediatric Dentistry services at Dr. Smith’s Dental Care. Dr. Smith and our caring team create a kid-friendly environment, ensuring positive and stress-free dental experiences for our youngest patients. From gentle cleanings to addressing specific pediatric dental needs, we prioritize the unique requirements of growing smiles. Trust Dr. Smith’s expertise in pediatric care, providing your child with the foundation for a lifetime of optimal oral health. Choose Pediatric Dentistry at Dr. Smith’s Dental Care for smiles that grow with confidence.</p>
                <div className="service-img">
                    <img src={ServiceFive} alt="" />
                </div>
            </div>



            <div className="service-lines service-line-6">
                <div className="headings">
                    <h3>06</h3>
                    <h2>Dental Implants for Lasting Solutions</h2>
                </div>
                <p>
                Dr. Smith and our skilled team specialize in providing durable and natural-looking implants, restoring both function and aesthetics. Whether you need a single-tooth replacement or a full set of implants, our personalized approach ensures a long-lasting solution. Implants not only enhance your smile but also promote oral health by preserving jaw bone density. Trust Dr. Smith’s expertise in dental implantology to rejuvenate your smile, offering a permanent and confident solution for a lifetime. Choose Dental Implants at Dr. Smith’s Dental Care for lasting dental excellence.</p>
                <div className="service-img">
                    <img src={ServiceOne} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AllServices