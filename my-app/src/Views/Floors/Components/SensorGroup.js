/* eslint-disable eqeqeq */
import React, { Component, useState } from "react";
import SensorItem from "./SensorItem";
import "./SensorList.css";
import {
  getTemperature,
  getHumidity,
  getTempStatuscolor,
  getHumStatuscolor,
} from "../../../Utils/SensorHelpers";
import SensorOptionsIcon from "../../../Media/icons/moreDots.png";
import SensorChevron from "../../../Media/icons/chevron.png";
import SensorGroupIconAlt from "../../../Media/icons/group-alt.png";
import { Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { updateUiIndex } from "../../../actions";
import GroupOptionsDropdown from '../Components/GroupOptionsDropdown'
import $ from 'jquery';

export default function SensorGroup(props) {
  const [groupOpen, setGroupOpen] = useState(false);
  const [optionForm, SetOptionForm] = useState(false);

  const getGroupData =() =>{
    let GroupData = { temp: null, hum: null };
      props.sensors.forEach((s) => {
        let sensorTemp = parseFloat(s.temperature);
        let sensorHum = parseFloat(s.humidity);
        if (GroupData.temp != null && sensorTemp != null) {
          GroupData.temp = (GroupData.temp + sensorTemp) / 2;
        } if (GroupData.hum != null && sensorHum != null) {
          GroupData.hum = (GroupData.hum + sensorHum) / 2;
        }if (GroupData.temp == null) {
          GroupData.temp = sensorTemp;
        } if (GroupData.hum == null) {
          GroupData.hum = sensorHum;
        }
      });
      return GroupData;
  }


    let groupdata = getGroupData();
    return (
      <div
        className={
         groupOpen ? "SensorGroup group-open" : "SensorGroup"
        }
      >
        <section className="GroupHeader">
          <img className="GroupIcon" src={SensorGroupIconAlt} alt="" />
          <span className="SensorName">{props.group.name}</span>
          <span className={`SensorTemp ${getTempStatuscolor(groupdata.temp)}`}>
            {getTemperature(groupdata.temp)}°
          </span>

          <span className={`SensorHum ${getHumStatuscolor(groupdata.hum)}`}>
            {getHumidity(groupdata.hum)}%
          </span>
          <div className="headerIcons">
          <div className="sensorOptionsHolder">
            <img className="sensorOptionsIcon PD" src={SensorOptionsIcon} onClick={() => SetOptionForm(!optionForm)}/>
             <GroupOptionsDropdown sensor={props.sensor} active={optionForm} setActive={(value) => SetOptionForm(value)} />
            
            <img
              className={
                groupOpen ? "chevron-down flip" : "chevron-down"
              }
              src={SensorChevron}
              onClick={(e) =>{
                setGroupOpen(!groupOpen);
                var hideGroupList = e.currentTarget.parentElement.parentElement.parentElement.parentElement.querySelector(".groupList");
                if(hideGroupList.classList.contains("groupList-hidden")){
                  $(hideGroupList).slideDown("fast");;
                }else{              
                  $(hideGroupList).slideUp("fast");
                  $(hideGroupList).toggle().css("display","none !important");
                }
              }
            }
            alt=""
          />
          </div>
        </div>
      </section>
      <Droppable droppableId={props.group.id.toString()} isDragDisabled>
        {(provided) => (
          <section
            className="groupList groupList-hidden"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {props.sensors.map((sensor, i) => {
                
                return (
                  <SensorItem
                    key={sensor.id}
                    sensor={sensor}
                  />
                );
              })}
              {provided.placeholder}
            </section>
          )}
           </Droppable>
      </div>
    );
}

