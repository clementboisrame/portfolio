import React from 'react'
import "./about.css";
import ME from '../../assets/me-about.png';
import { FaAward } from "react-icons/fa6";
import { TbFolderPause } from "react-icons/tb";

const About = () => {
  return (
    <section id='about'>
      <h5>
        Get To Know
      </h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About image" />
          </div>
        </div>

        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>1 year experiences</small>
            </article>
          


          
            {/* <article className='about__card'>
              <LiaUserSolid className='about__icon' />
              <h5>Clients</h5>
              <small>200 + clients</small>
            </article> */}
         
        

        
          <article className='about__card'>
            <TbFolderPause className='about__icon' />
            <h5>Projects</h5>
            <small>in progress 

            </small>
          </article>
</div>
          <p>Welcome to my portfolio. Here are some projects I'm currently working on. I will be adding demo videos in the near future.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About