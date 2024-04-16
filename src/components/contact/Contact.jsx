import React, { useRef } from 'react';
import './contact.css'
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineWhatsapp } from "react-icons/md";
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tw58j22', 'template_w42ckvx', form.current, '-gJgbmg2rFYlqxIq8',
      )
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className="contact__options">
      <article className='contact__option'>
        <HiOutlineMail className='contact__option-icon' />
          <h4>Email</h4>
          <h5>cboisrame1@gmail.com</h5>
          <a href='mailto:cboisrame1@gmail.com'target='blank'>Send a message</a>
        </article>  
              <article className='contact__option'>
              <MdOutlineWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+33633339980   </h5>
          <a href="https://api.whatsapp.com/send?phone=+33633339980" target='blank'>Send a message</a>
        </article>       

      </div>

      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name'placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send A Message</button>
      </form>
    </div>

    </section>
  )
}

export default Contact