import React from 'react'
import './service.css'
import { BsPatchCheckFill } from "react-icons/bs";

const Services = () => {
  return (
    <section id='services'>
      
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Desing</h3>
          </div>
            <ul className='service__list'>
            <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>Wireframe creation</p>

              </li>              <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>Color selection</p>

              </li>              <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>Modeling an application</p>
              </li>
            </ul>
        </article>

      {/*=============END OF UI/UX=========== */ }

      <article className='service'>
          <div className='service__head'>
            <h3>Frontend Developement</h3>
          </div>
            <ul className='service__list'>
            <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>Reading the model</p>

              </li>              <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>Setting up CSS </p>

              </li>              <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>Creating the various components </p>


              </li>
            </ul>
        </article>
         {/*=============END OF CREATION=========== */ }
         <article className='service'>
          <div className='service__head'>
            <h3>Backend Developement</h3>
          </div>
            <ul className='service__list'>
            <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>database creation </p>

              </li>              <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>setting up security</p>

              </li>              <li>
              <BsPatchCheckFill className='service__list-icon'/>
              <p>road building </p>
    </li>
            </ul>
        </article>
      </div>
     </section>
  )
}

export default Services