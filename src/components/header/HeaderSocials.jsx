import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='htpps://linkedin.com' target='_blank'><FaLinkedin/></a>
        <a href='htpps://github.com' target='_blank'><FaGithub/></a>
        <a href='htpps://dribble.com' target='_blank'><FaDribbble /></a>
    </div>
  )
}

export default HeaderSocials