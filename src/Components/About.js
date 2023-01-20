import React, {useState, useEffect} from 'react'
import data from '../Data/dataIcons';

const About = ( {setIsOpen}) => {
  useEffect(() =>{
    setIsOpen(false)
  }, [])
  return (
    <section className='about'>
      <img className='about__img' src={require('../Images/me.jpeg')} />
      <div className='about__info'>
        <div className='about__info__links'>
          {data.map((item) => {
            return (
              <a key={item.id} href={item.link} className='about__info__icon' target={'_blank'}>{item.icon}</a>
            )
          })}
        </div>
        <p className='about__info__text'>All my photos were taken with PRAKTICA BM.</p>
      </div>
    </section>
  )
}

export default About;