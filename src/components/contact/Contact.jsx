import React, {useRef} from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsLinkedin} from 'react-icons/bs'

import emailjs from 'emailjs-com'


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d1px4bu', 'template_k3prvhn', form.current, 'VANBXxoYbzXBps3Zs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };
  return (
    <section id='contact'>

    <h5>Get In Touch</h5>
    <h2>Contact</h2>

      <div className="container contact__container">

      {/* contact options  */}
        <div className="contact__options">
          <article className="contact__option">
          <HiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sinhadipesh25@gmail.com</h5>
            <a href="mailto:sinhadipesh25@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
          <AiOutlineInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>@dipesh_ranjan07</h5>
            <a href="https://ig.me/m/dipesh_ranjan07" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
          <BsLinkedin className='contact__option-icon' />
            <h4>LinkedIn</h4>
            <h5>dipesh-ranjan</h5>
            <a href="https://www.linkedin.com/in/dipesh-ranjan/" target='_blank'>Visit Profile</a>
          </article>
        </div>

        {/* form  */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact