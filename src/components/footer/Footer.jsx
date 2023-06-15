import React from 'react'
import './footer.css'
import {BsLinkedin, BsFacebook} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>Dipesh Ranjan</a>
      <ul className="permalinks">
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href='https://www.linkedin.com/in/dipesh-ranjan/' target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/dipesh2508' target='_blank' rel="noopener noreferrer"><FaGithub /></a>
        <a href='https://www.instagram.com/dipesh_ranjan07/' target='_blank' rel="noopener noreferrer"><FaInstagram /> </a>
        <a href="https://www.facebook.com/dipesh.ranjan.007/" target='_blank' rel="noopener noreferrer"><BsFacebook /></a>
        <a href="https://twitter.com/DipeshRanjan12" target='_blank' rel="noopener noreferrer"><AiOutlineTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Dipesh Ranjan. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer