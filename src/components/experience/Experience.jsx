import React from 'react'
import './experience.css';
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Developent</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div> <h4>HTML</h4>
                <small className='text-ligth'>
                  Basic
                </small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Javascript</h4>
                <small className='text-ligth'>
                Basic
                </small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>CSS</h4>
                <small className='text-ligth'>
                Basic
                </small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>JAVA</h4>
                <small className='text-ligth'>
                  Novice
                </small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>React</h4>
                <small className='text-ligth'>
                Basic
                </small></div>
            </article>
          </div>
        </div>
        <div className='experience__backend'>
          <h3>Backend Developent</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Node.js</h4>
                <small className='text-ligth'>
                Basic
                </small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>MySQL</h4>
                <small className='text-ligth'>
                Basic
                </small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>Python</h4>
                <small className='text-ligth'>
                  Novice
                </small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>JAVA</h4>
                <small className='text-ligth'>
                  Novice
                </small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div><h4>React</h4>
                <small className='text-ligth'>
                  Basic
                </small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience