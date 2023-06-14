import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__webdev">

          {/* web technologies */}
          <h3>Web Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* other skills I possess */}
        <div className="experience__others">
          <h3>Other Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Illustrator</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Photoshop</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Git</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Research</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Documentation</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>


          </div>

        </div>
      </div>
    </section>
  )
}

export default Experience