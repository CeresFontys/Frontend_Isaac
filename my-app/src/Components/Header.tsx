import React, { Component } from 'react';
import Navigation from './Navigation'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render(){
       // if (window.location.pathname === '/login') return null;
        return(
        <header className="page-header">
          <span className="font-bold">ReactOefenApp</span>

            <Navigation />
        </header>
        )
    }
}

export default Header;