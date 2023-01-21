import React from 'react'
import '../Styles/app.css'

const Main = ({isOpen}) => {
  return (
    <section className='main'>
      <img className='main__img' style={{transform: isOpen ? "rotate(0)" : "rotate(45deg)"}} src={require('../Images/sign.png')} />
    </section>
  )
}

export default Main;