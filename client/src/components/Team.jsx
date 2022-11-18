import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../css/team.css'

const Team = () => {
  return (
    <div className='team'>
      <div className='user'>
        <h1>Mario Franco</h1>
        <a href='https://github.com/MKamui'><FaGithub size={30} className="icon"/></a>
        <a href='https://www.linkedin.com/in/mario-franco-427904178/'><FaLinkedin size={30} className="icon"/></a>
      </div>
      <div className='user'>
        <h1>Valentina Bonfanti</h1>
        <a href='https://github.com/ValentinaBonfanti'><FaGithub size={30} className="icon"/></a>
        <a href='https://www.linkedin.com/in/valentina-bonfanti-1a7048213/'><FaLinkedin size={30} className="icon"/></a>
      </div>
      <div className='user'>
        <h1>Lorenzo Mentesana</h1>
        <a href='https://github.com/Mentela'><FaGithub size={30} className="icon"/></a>
        <a href='https://www.linkedin.com/in/lorenzomentesana/'><FaLinkedin size={30} className="icon"/></a>
      </div>
      <div className='user'>
        <h1>Luciano Galvarini</h1>
        <a href='https://github.com/LucianoGalvarini'><FaGithub size={30} className="icon"/></a>
        <a href='https://www.linkedin.com/in/luciano-galvarini-1b5bb11ab/'><FaLinkedin size={30} className="icon"/></a>
      </div>
      <div className='user'>
        <h1>Franklin Fontalvo</h1>
        <a href='https://github.com/Fontalvo22'><FaGithub size={30} className="icon"/></a>
        <a href='https://www.linkedin.com/in/franklin-fontalvo/'><FaLinkedin size={30} className="icon"/></a>
      </div>
      <div className='user'>
        <h1>Alejandro Briceño</h1>
        <a href='https://github.com/Alejo2608'><FaGithub size={30} className="icon"/></a>
        <a href='https://www.linkedin.com/in/alejandro-brice2608/'><FaLinkedin size={30} className="icon"/></a>
      </div>
    </div>
  )
}

export default Team