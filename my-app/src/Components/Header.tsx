import React, { Component } from 'react';
import './Header.css'
import Logo from '../Media/images/isaac-logo-white.png'
import { Link } from 'react-router-dom';

class Header extends Component {
    render(){
        if (window.location.pathname === '/login') return null;
        return(
        <header className="page-header">
          <Link id="Logo" to="/">
          <img src={Logo} alt="ISAAC"></img>
          </Link>
        </header>
        )
    }
}

export default Header;