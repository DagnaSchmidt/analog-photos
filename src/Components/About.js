import React, {useEffect} from 'react'
import data from '../Data/dataIcons';

const About = ({setIsOpen}) => {
  useEffect(() =>{
    setIsOpen(false);
  }, [setIsOpen])
  return (
    <section className='about'>
      <img className='about__img' src={require('../Images/me.jpeg')} alt='me' />
      <div className='about__info'>
        <div className='about__info__links'>
          {data.map((item) => {
            return (
              <a key={item.id} href={item.link} className='about__info__icon' target={'_blank'} without rel="noreferrer">{item.icon}</a>
            )
          })}
        </div>
        <p className='about__info__text'>All my photos were taken with PRAKTICA BM.</p>
      </div>
    </section>
  )
}

export default About;