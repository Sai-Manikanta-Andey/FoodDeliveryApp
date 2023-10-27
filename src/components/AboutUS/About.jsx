import React from 'react'
import Users from '../UsesrInAbout/Users'
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
      <h2 className='title'>About The Team</h2>
      <Users/>
    </div>
  );
}

export default About