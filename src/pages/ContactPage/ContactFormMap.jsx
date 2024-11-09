import { useState } from "react"
import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);



const ContactFormMap = () => {

    
  useGSAP(() => {
    gsap.from("form > div > .name", {
      y: 100,
      delay: .2,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "form > div > .name"
      }
    })
    gsap.from("div > .Email", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "div > .Email"
      }
    })
    gsap.from("form > div .message", {
      y: 100,
      delay: .8,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "form > div .message"
      }
    })
    gsap.from("form > button", {
      y: 100,
      delay: .5,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: "form > button"
      }
    })
    gsap.from(".map", {
      x: 100,
      delay: .2,
      duration: 1,
      opacity: 0,
      scrollTrigger: {
        trigger: ".map"
      }
    })

  })


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [notification, setNotification] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
        setNotification('');
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = 'Name is required';
        if (!formData.email) tempErrors.email = 'Email is required';
        if (!formData.message) tempErrors.message = 'Message is required';
        return tempErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Form submission logic here (e.g., sending data to a server)

            // Clear the form after submission
            setFormData({
                name: '',
                email: '',
                message: '',
            });
            setNotification('Form sent successfully!');

            setTimeout(()=>{
                setNotification("")
            }, 5000)
        }
    };


  return (
    <div className="contactForm-MAP">
            <form onSubmit={handleSubmit}>
                <div>
                    <label></label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="name"
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div>
                    <label></label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="Email"
                    />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>

                <div>
                    <label></label>
                    <textarea
                    className="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        style={{maxHeight : "35vh",minHeight : "20vh",  maxWidth : "100%"}}
                    />
                    {errors.message && <p className="error">{errors.message}</p>}
                </div>

                <button type="submit">SEND</button>
            {notification && <p className="notification">{notification}</p>}
            </form>


            <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7202.82676971267!2d-0.16687565638631!3d51.516123005597684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b6784889765%3A0x62271f44ab9481ef!2sDr%20Elliot%20Smith!5e1!3m2!1sen!2sus!4v1724002440634!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

  )
}

export default ContactFormMap