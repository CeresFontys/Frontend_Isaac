import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SensorList from './Components/SensorList'



class FloorsPage extends Component {
    render() {
        return (
            <div>floors
                <br/>
                <SensorList />
                </div>
        
        );
    }
}

export default FloorsPage;