import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/images/img1.png'
import IMG2 from '../../assets/images/img2.png'
import IMG3 from '../../assets/images/img3.png'
import IMG4 from '../../assets/images/img4.png'
import IMG5 from '../../assets/images/img5.png'
import IMG6 from '../../assets/images/img6.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Chat App',
    github: 'https://github.com/dipesh2508/chat-app',
    demo: ''
  },
  {
    id: 2,
    image: IMG2,
    title: 'Weather App',
    github: 'https://github.com/dipesh2508/Weather',
    demo: 'https://dipesh2508.github.io/Weather/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Sign-in page',
    github: 'https://github.com/dipesh2508/sign-page',
    demo: 'https://dipesh2508.github.io/sign-page/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'LittleShrub',
    github: 'https://github.com/dipesh2508/LittleShrub',
    demo: 'https://dipesh2508.github.io/LittleShrub/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'OLA pricing',
    github: 'https://github.com/dipesh2508/ola',
    demo: 'https://dipesh2508.github.io/ola/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Stopwatch',
    github: 'https://github.com/dipesh2508/stopwatch',
    demo: 'https://dipesh2508.github.io/stopwatch/'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
      {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt="" />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>GitHub</a>
            <a href={demo} className="btn btn-primary" target='_blank'>Demo</a>
          </div>
        </article>
          )
        })
      }
        
      </div>
    </section>
  )
}

export default Portfolio