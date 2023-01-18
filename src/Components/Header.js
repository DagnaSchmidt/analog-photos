import React from 'react'
import { Link } from 'react-router-dom';

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
            <p className='nav__toggle' onClick={() => setIsOpen(!isOpen)}>
                MENU
            </p>
        </nav>
    </header>
  )
}

export default Header;