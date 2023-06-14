import React from 'react'
import './services.css'
import {GiCheckMark} from 'react-icons/gi'

const Services = () => {
  return (
    <section id='services'>
      <h5>
        What I Offer
      </h5>
      <h2>Services</h2>
      <div className="container services__container">

      {/* Graphics Desgin  */}
        <article className="service">
          <div className="service__head">
            <h3>Graphics Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Create visual text and imagery concepts.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Design graphics to meet specific requirement.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Develop the production design and overall layout.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Create Digital Arts with Illustrator.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Create Posters, Banners and Logos.</p>
            </li>
          </ul>
        </article>

        {/* Web Development  */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Create High-Fidelity Mockups for Website.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Create aesthetically pleasing Front End.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Create Responsive Websites for different devices.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Writing and reviewing code for sites.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Integrating data from back-end services and databases.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Determining user needs by analyzing technical requirements.</p>
            </li>
          </ul>
        </article>

        {/* Professional Skills */}

        <article className="service">
          <div className="service__head">
            <h3>Professional Skills</h3>
          </div>

          <ul className="service__list">
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Create Documentation related to product and events.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Perform Technical analysis for research purposes.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Create clear, consise and effective reports.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Creating and Presenting appealing presentations.</p>
            </li>
            <li>
              <GiCheckMark className='service__list-icon' />
              <p>Show Exceptional leadership skills for increased productivity.</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services