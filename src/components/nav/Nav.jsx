import React from 'react'
import './nav.css'
import {GoHome} from 'react-icons/go'
import {AiOutlineUser} from 'react-icons/ai'
import {MdWorkOutline} from 'react-icons/md'
import {BiCodeAlt, BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {

  const [activeNav, setActvieNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActvieNav('#')} className={activeNav === '#' ? 'active' : ''}><GoHome /></a>
      <a href="#about" onClick={() => setActvieNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActvieNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdWorkOutline /></a>
      <a href="#services" onClick={() => setActvieNav('#services')} className={activeNav === '#services' ? 'active' : ''}><BiCodeAlt /></a>
      <a href="#contact" onClick={() => setActvieNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail /></a>
    </nav>
  )
}

export default Nav