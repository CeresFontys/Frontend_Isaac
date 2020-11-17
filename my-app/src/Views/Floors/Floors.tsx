import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SensorData from './Components/SensorData'
import SensorList from './Components/SensorList';



class FloorsPage extends Component {
    render() {
        return (
            <div>floors
                
                <br/>
                <SensorList />
                <SensorData />
            </div>
        
        );
    }
}

export default FloorsPage;