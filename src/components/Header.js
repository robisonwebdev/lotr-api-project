import React from 'react'
import '../styles/Header.css';
import logo from '../images/lotr_logo2.png';

const Header = () => {
    return (
        <header>
            <img src={logo} alt='The Lord of the Rings text logo' />
        </header>
    );
}

export default Header
