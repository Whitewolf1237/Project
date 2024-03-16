import React from 'react';
import logo from './img/logo.png'

const Header = () => (
        <div className='nav'>
            <div className='logoContainer'>
                <img className='logo' src={logo}/>
            </div>
            <div className='nav_item'>
                <ul className='nav_btn'>
                    <li><a>HOME</a></li>
                    <li><a>ABOUT US</a></li>
                    <li><a>SERVICES</a></li>
                    <li><a>CONTACT US</a></li>
                </ul>
            </div>
        </div>
        
);

export default Header;