import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatars/sarthak.png'
import AVTR2 from '../../assets/avatars/ashutosh.png'
import AVTR3 from '../../assets/avatars/isheta.png'
import AVTR4 from '../../assets/avatars/kislay.png'

// import Swiper core and required modules
import {Pagination, Autoplay} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import "swiper/css/effect-fade";

const data = [
  {
    avatar: AVTR1,
    name: 'Sarthak Chauhan',
    review: 'The attention to detail that dipesh puts up in his work is exceedingly second to none, in a brief spell where we have collaborated, he has been instrumental in aiding me with absolutely best quality of work and I truly appreciate the dedication and punctuality with which he does his work.'
  },
  {
    avatar: AVTR2,
    name: 'Ashutosh Kumar',
    review: "Dipesh's skills are so impressive, they should come with their own theme song! From his uncanny ability to juggle multiple tasks with ease to his knack for turning coffee into code, Dipesh is a true wizard of skillfulness. I'm convinced he has a secret superpower hidden up his sleeve."
  },
  {
    avatar: AVTR3,
    name: 'Isheta Aggarwal',
    review: "Dipesh is an incredibly talented and hardworking individual who consistently performs, making him an exceptional teammate in competitions. His unwavering commitment, dedication, and instrumental contributions are one of the key factors behind our continuous success."
  },
  {
    avatar: AVTR4,
    name: 'Kislay Gupta',
    review: "Dipesh is my go to guy whenever I need some sort of help in website design work, he understand my needs and fulfills them with absolute accuracy, due to his brilliance command on latest technologies used nowadays, making his skills on par the industry mark."
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Colleagues</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container' 
      modules={[ Pagination, Autoplay]}
      spaceBetween={40}
      slidesPerView={1}
      loop={true}
      autoplay={{ 
        delay: 2500,
        disableOnInteraction:false,
        pauseOnMouseEnter: true
        }}
      speed={1200}
      pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="avatar" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>

    </section>


  )
}

export default Testimonials