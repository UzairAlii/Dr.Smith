import React from 'react'
import { useState, useEffect } from 'react'
import phone from "../images/phone.svg"
import address from "../images/address.svg"
import timing from "../images/timing.svg"
import { useLocation } from 'react-router-dom'
import PreFooter from "../pages/AboutPage/PreFooter"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);


const Contact = () => {

  useGSAP(() => {
    gsap.from(".contact-left h3", {
      y: 100,
      delay: .2,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".contact-left h3"
      }
    })
    gsap.from(".contact-left h1", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".contact-left h1"
      }
    })
    gsap.from(".contact-left > p", {
      y: 100,
      delay: .8,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".contact-left p"
      }
    })
    gsap.from(".contact-num", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".contact-num"
      }
    })
    gsap.from(".address", {
      y: 100,
      delay: .8,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".address"
      }
    })
    gsap.from(".timing", {
      y: 100,
      delay: .8,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".timing"
      }
    })
    gsap.from(".namebox", {
      y: 100,
      delay: .2,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".namebox"
      }
    })
    gsap.from(".email", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".email"
      }
    })
    gsap.from(".phone", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".phone"
      }
    })
    gsap.from(".select", {
      y: 100,
      delay: .8,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".select"
      }
    })
    gsap.from(".message", {
      y: 100,
      delay: .8,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".message"
      }
    })
    gsap.from("form > div > button", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "form > div > button"
      }
    })


  })

  const location = useLocation();

  useEffect(() => {
    // Jab bhi location change ho, ya URL mein hash ho, scroll karo
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0); // Scroll ko ensure karne ke liye setTimeout use karna
      }
    }
  }, [location]);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    selectOption: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!formData.name.trim()) {
      formErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      formErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.phone.trim()) {
      formErrors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^\d{11}$/.test(formData.phone)) {
      formErrors.phone = 'Phone number must be 11 digits';
      valid = false;
    }

    if (!formData.selectOption) {
      formErrors.selectOption = 'Please select an option';
      valid = false;
    }

    if (!formData.message.trim()) {
      formErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form
      alert('Form submitted successfully');
  
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        selectOption: '',
        message: ''
      });
      
      // Clear errors
      setErrors({});
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  return (
    <div className='contact-container'>
    <div className="contact-upper-side">
      <div className="contact-left">
        <h3>Contact us today</h3>
        <h1>Your path to a healthier smile</h1>
        <p>Fill out the form below to schedule an appointment or inquire about our services.</p>
        <div className="info">
          <div className="contact-num info-divs">
            <img src={phone} alt="" />
          <p>(303) 555-0105</p>
          </div>
          <div className="address info-divs">
            <img src={address} alt="" />
          <p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
          </div>
          <div className="timing info-divs">
            <img src={timing} alt="" />
          <div>
            <p>Mon-Fri = 09.00am - 07.00pm</p>
            <p>Sat-Sun = 11.00am - 10.00pm</p>
          </div>
          </div>
        </div>
      </div>




      <div className="contact-right">
      <form onSubmit={handleSubmit} id='contact'>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder='Full Name'
          className='namebox'
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder='Email'
          className='email'
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      <div>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder='Phone Number'
          className='phone'
        />
        {errors.phone && <span>{errors.phone}</span>}
      </div>

      <div>
        <select
          name="selectOption"
          value={formData.selectOption}
          onChange={handleChange}
          className='select'
        >
          <option value="">What type of services are you looking for?</option>
          <option value="option1">Comprehensive Dental Exams</option>
          <option value="option2">Cosmetic Dentistry for a Radiant Smile</option>
          <option value="option3">Precision Restorative Dentistry</option>
          <option value="option4">Orthodontic Solutions for a Straighter Smile</option>
          <option value="option5">Paediatric Dentistry for Growing Smiles</option>
          <option value="option6">Dental Implants for Lasting Solutions</option>
        </select>
        {errors.selectOption && <span>{errors.selectOption}</span>}
      </div>

      <div>
  <textarea
  className='message'
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Message"
    style={{ minHeight: "180px", maxHeight: '180px', maxWidth: "100%" }}
  />
  {errors.message && <span>{errors.message}</span>}
</div>


      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
      </div>
      </div>

      <PreFooter />

    </div>
  )
}

export default Contact