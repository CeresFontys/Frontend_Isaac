import React, {Component, useState} from 'react';
import SensorIcon from '../../../Media/icons/sensor.png'
import SensorOptionsIcon from '../../../Media/icons/moreDots.png'
import './SensorList.css';
import {getTemperature, getHumidity, getTempStatuscolor, getHumStatuscolor} from'../../../Utils/SensorHelpers';
import { Draggable } from 'react-beautiful-dnd'
import {useSelector, useDispatch } from "react-redux";
import {setSelectedSensor} from '../../../actions'
import SensorOptionsDropdown from '../Components/SensorOptionsDropdown'


export default function SensorItem(props){
    const dispatch = useDispatch();
    let temp = getTemperature(props.sensor.temperature)
    let hum = getHumidity(props.sensor.humidity)
    const selectedSensor = useSelector((state) => state.selectedSensor);
    const [optionForm, SetOptionForm] = useState(false);

    let selected = "";
    if(selectedSensor){
      if(selectedSensor.id == props.sensor.id){
        selected = "selected"
      }
    }
  
    const clickSelected = (e) => {
      if(e.target.closest(".PD")){
        return;
      }
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
           onClick={(e) =>clickSelected(e)}

          >
            <img src={SensorIcon}/>
            <span className="SensorName">{props.sensor.name}</span>
            <span className={`SensorTemp ${getTempStatuscolor(temp)}`} >{temp}°</span>
            <span className={`SensorHum ${getHumStatuscolor(hum)}`}>{hum}%</span>
            <div className="sensorOptionsHolder">
            <img className="sensorOptionsIcon PD" src={SensorOptionsIcon} onClick={() => SetOptionForm(!optionForm)}/>
             <SensorOptionsDropdown sensor={props.sensor} active={optionForm} setActive={(value) => SetOptionForm(value)} />
            </div>


            
            </div>
        )}
        </Draggable>
      )
  }
