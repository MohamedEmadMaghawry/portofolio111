import React, { useState } from 'react'
import { useRef } from 'react';
import "./Contact.css"
import emailjs from '@emailjs/browser';
import { themeContext } from "../../Context";
import { useContext } from "react";
const Contact = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
    const form = useRef();
  const [done,setDone]=useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_g3pwird', 'template_l8rn6en', form.current, {
          publicKey: 'nr_GiSMxXdubuVgHZ',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setDone("true")
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    <div className='contact-form'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode?"white":""}}>Get In Touch</span>
                <span>Contact Me</span>
                <div className='blur s-blur1' 
                style={{background:"#ABF1FF94"}}></div>
            </div>
        </div>
        <div className="c-right">
            <form  ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'/>
                <input type="submit" value="Send" className='button' />
                <span>{done && "Thanks for Contacting Me!"}</span>
                <div className='blue c-blur1' style={{
                    background:"var(--purple)"
                }}></div>
            </form>
        </div>
      
    </div>
  )
}
export default Contact
