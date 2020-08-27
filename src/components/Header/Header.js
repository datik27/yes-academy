import React from 'react';
import logo from '../../images/favicon.jpg'

const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt=""/>
            <nav>
                <a href="/Home">Home</a>
                <a href="/Course">Course</a>
                <a href="/About Us">About Us</a>
            </nav>
        </div>
    );
};

export default Header;