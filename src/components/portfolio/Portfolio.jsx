import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Externatic</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn' rel="noreferrer" target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Nba Morning</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'rel="noreferrer" target='_blank'>Github</a>
          </div>
        </article>
       


      </div>
    </section>
  )
}

export default Portfolio