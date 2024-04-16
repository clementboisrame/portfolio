import React from 'react'
import './nav.css'
import { GoHome } from "react-icons/go";
import { LuUser2 } from "react-icons/lu";
import { RiBook2Line } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')}rel="noreferrer" className={activeNav === '#' ? 'active' : ''}><GoHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')}rel="noreferrer" className={activeNav === '#about' ? 'active' : ''}><LuUser2 /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')}rel="noreferrer" className={activeNav === '#experience' ? 'active' : ''}><RiBook2Line /></a>
      <a href='#services' onClick={() => setActiveNav('#services')}rel="noreferrer" className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')}rel="noreferrer" className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav