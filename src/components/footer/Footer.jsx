import React from 'react'
import './footer.css'
const Footer = () => {
  return (
   <footer>
    <a href='#' className='footer__logo'>Clément</a>
    <ul className='permalink'>
    <li><a href="#"rel="noreferrer">Home</a></li>
    <li><a href="#about"rel="noreferrer">About</a></li>
    <li><a href="#experience"rel="noreferrer">Experience</a></li>
    <li><a href="#services"rel="noreferrer">Services</a></li>
    <li><a href="#portfolio"rel="noreferrer">Portfolio</a></li>
    <li><a href="#testimonials"rel="noreferrer">Testimonials</a></li>
    <li><a href="#contact"rel="noreferrer">Contact</a></li>

    </ul>
   </footer>
  )
}

export default Footer