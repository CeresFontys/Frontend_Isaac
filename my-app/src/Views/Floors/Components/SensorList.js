import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {GetSensorDbData} from './SensorDbData';
import {SensorMqttData} from './SensorMqttData'
import {useSelector} from 'react-redux';

function SensorList() {
const sensors = useSelector(state => state.sensors);
GetSensorDbData();
SensorMqttData();

let content = <div>Loading sensors..</div>
if(sensors){
    content = [];
    console.log(sensors);
    sensors.forEach(sensor => {
       content.push(
       <div key={sensor.name}>
           <span>{sensor.name}    </span>
           <span>temp: {Math.round((parseFloat(sensor.temperature) + Number.EPSILON) * 100) / 100}    </span>
           <span>hum:{Math.round((parseFloat(sensor.humidity) + Number.EPSILON) * 100) / 100}    </span>
       </div>);
    });
}
   
   return(
       <div>
          {content}
       </div>
   )
}

export default SensorList;