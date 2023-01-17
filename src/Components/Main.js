import React from 'react'
import {TbHandFinger} from 'react-icons/tb';
import '../Styles/app.css'

const Main = ({isOpen}) => {
  return (
    <section className='main'>
      <TbHandFinger style={{transform: isOpen ? "rotate(0)" : "rotate(45deg)"}} />
    </section>
  )
}

export default Main;