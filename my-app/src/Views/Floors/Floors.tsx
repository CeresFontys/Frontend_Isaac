import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SensorData from './Components/SensorData'



class FloorsPage extends Component {
    render() {
        return (
            <div>floors
                
                <br/>
                <SensorData />
            </div>
        
        );
    }
}

export default FloorsPage;