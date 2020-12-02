import React, {Component} from 'react';
import SensorIcon from '../../../Media/icons/sensor.png'
import SensorOptionsIcon from '../../../Media/icons/moreDots.png'
import './SensorList.css';
import {getTemperature, getHumidity, getTempStatusCollor,getHumStatusCollor} from'./../Utils/SensorHelpers';
import { Draggable } from 'react-beautiful-dnd'

export default class SensorItem extends Component {

  render() {
    let temp = getTemperature(this.props.sensor.temperature)
    let hum = getHumidity(this.props.sensor.humidity)
      return (
        <Draggable draggableId={this.props.sensor.id.toString()} index={this.props.sensor.uiIndex} > 
        {provided =>(
          <div className="sensorItem"
           {...provided.draggableProps}
           {...provided.dragHandleProps}
           ref={provided.innerRef}
          >
            <img src={SensorIcon}/>
            <span className="SensorName">{this.props.sensor.name}</span>
            <span className={getTempStatusCollor(temp)} >{temp}°</span>
            <span className={getHumStatusCollor(hum)}>{hum}%</span>
            <img className="sensorOptionsIcon" src={SensorOptionsIcon} />
            </div>
        )}
        </Draggable>
      )
  }
}