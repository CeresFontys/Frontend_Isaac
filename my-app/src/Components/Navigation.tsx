import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render(){
        return(
    <div>
        <div className="font-bold py-3">
            Menu
        </div>
        <ul>
            <li>
                <Link to="/" > Home</Link>
            </li>
            <li>
                <Link to="/login">Login </Link>
            </li>
        </ul>

    </div>
        )
    }
}

export default Navigation;