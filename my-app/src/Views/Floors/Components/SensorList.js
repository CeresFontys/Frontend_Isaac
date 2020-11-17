import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAxiosGet } from '../../../Hooks/HttpRequest'
import { useParams } from 'react-router-dom'

function SensorList() {
   // const { floor } = useParams()
    const url = `http://localhost:5002/api/sensor/sensors/3`
    
    let sensors = useAxiosGet(url);
    let content = null

    

    if(sensors.loading){
        content = <span>Loading Sensors...</span>
    }
    if(sensors.error){
        content = <p> Could not load any sensors on this floor</p>
    }
    if (sensors.data) {
        console.log(sensors);
        content = 
            <div>bruh</div>
        
    }
    return (
        <div id="SensorListContainer">
            <section><h2>Sensors</h2><span>+</span></section>
            {content}
        </div>
    )
}

export default SensorList;