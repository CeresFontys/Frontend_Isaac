import React, {Component} from 'react';
import SensorIcon from '../../../Media/icons/sensor.png'
import SensorOptionsIcon from '../../../Media/icons/moreDots.png'
import './SensorList.css';
import {getTemperature, getHumidity, getTempStatuscolor, getHumStatuscolor} from'../../../Utils/SensorHelpers';
import { Draggable } from 'react-beautiful-dnd'
import {useSelector, useDispatch } from "react-redux";
import {setSelectedSensor} from '../../../actions'

export default function SensorItem(props){
    const dispatch = useDispatch();
    let temp = getTemperature(props.sensor.temperature)
    let hum = getHumidity(props.sensor.humidity)
    const selectedSensor = useSelector((state) => state.selectedSensor);
    let selected = "";
    if(selectedSensor){
      if(selectedSensor.id == props.sensor.id){
        selected = "selected"
      }
    }
    const clickSelected = () => {
      if(selectedSensor == props.sensor){
        return dispatch(setSelectedSensor(null));
      }
      dispatch(setSelectedSensor(props.sensor));
    }
      return (
        <Draggable draggableId={props.sensor.id.toString()} index={props.sensor.uiIndex} > 
        {(provided, snapshot)=>(
          <div className={`sensorItem ${selected}`}
           {...provided.draggableProps}
           {...provided.dragHandleProps}
           ref={provided.innerRef}
           isDragging={snapshot.isDragging}
           onClick={clickSelected}
          >
            <img src={SensorIcon}/>
            <span className="SensorName">{props.sensor.name}</span>
            <span className={`SensorTemp ${getTempStatuscolor(temp)}`} >{temp}°</span>
            <span className={`SensorHum ${getHumStatuscolor(hum)}`}>{hum}%</span>
            <img className="sensorOptionsIcon" src={SensorOptionsIcon} />

            
            </div>
        )}
        </Draggable>
      )
  }
