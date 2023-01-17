import React from 'react'
import { Link } from 'react-router-dom';
import {GrClose, GrAdd} from 'react-icons/gr';

const Header = ({isOpen, setIsOpen}) => {
  return (
    <header className='header'>
        <div className='logo'>
            <Link to='/'>DS</Link>
        </div>
        <nav className='nav'>
            <ul className='nav__list' style={{display: isOpen ? 'flex' : 'none'}}>
                <li className='nav__list__item'>
                    <Link to='/photos' >PHOTOS</Link>
                </li>
                <li className='nav__list__item'>
                    <Link to='/about'>ABOUT</Link>
                </li>
            </ul>
            <div className='nav__toggle' onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <GrClose /> : <GrAdd /> }
            </div>
        </nav>
    </header>
  )
}

export default Header;