import React, { Component } from 'react';
const Connector = require('mqtt-react');

import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render(){
       // if (window.location.pathname === '/login') return null;
        return(
          <Connector mqttProps="ws://test.mosca.io/">
            
          </Connector>
        )
    }
}

export default Header;