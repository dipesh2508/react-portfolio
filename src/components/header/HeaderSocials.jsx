import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/dipesh-ranjan/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/dipesh2508' target='_blank'><FaGithub /></a>
        <a href='https://www.instagram.com/dipesh_ranjan07/' target='_blank'><FaInstagram /> </a>
    </div>
  )
}

export default HeaderSocials