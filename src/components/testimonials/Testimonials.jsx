import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {  Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {

  const data =
  
[    {avatar: AVTR1,
    name: 'Tina Snow',
    review: 'Leave me a comment if you have worked with me and thank you soon.',
},{
    avatar: AVTR2,
    name: 'Tina Snow',
    review: 'Leave me a comment if you have worked with me and thank you soon.',
},
   { avatar: AVTR3,
    name: 'Tina Snow',
    review: 'Leave me a comment if you have worked with me and thank you soon.',
},{
    avatar: AVTR4,
    name: 'Tina Snow',
    review: 'Leave me a comment if you have worked with me and thank you soon.',
  }]


  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className='container testimonials_container' 
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt="Avatar One" />
                  <h5 className='client__name'>{name}</h5>
                </div>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Testimonials