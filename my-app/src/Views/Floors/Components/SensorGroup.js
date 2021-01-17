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
import axios from "axios";

export default function SensorGroup(props) {
  const [groupOpen, setGroupOpen] = useState(false);
  const [optionForm, SetOptionForm] = useState(false);
  const [rename, setRename] = useState(false);
  const [groupName, setGroupName] = useState(props.group.name);

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
         groupOpen ? "SensorGroup group-open" : "SensorGroup group-closed"
        }
      >
        <section className="GroupHeader">
          <img className="GroupIcon" src={SensorGroupIconAlt} alt="" />
          <span contentEditable={rename} value={groupName} className={`SensorName ${rename&&"editable"}`} onChange={(e) => setGroupName(e.target.value)}>{groupName}</span>
          <span className={`SensorTemp ${getTempStatuscolor(groupdata.temp)}`}>
            {getTemperature(groupdata.temp)}°
          </span>
          <span className={`SensorHum ${getHumStatuscolor(groupdata.hum)}`}>
            {getHumidity(groupdata.hum)}%
          </span>
          <div className="headerIcons">
          <div className="sensorOptionsHolder">
            <img className="sensorOptionsIcon PD" src={SensorOptionsIcon} onClick={() => SetOptionForm(!optionForm)}/>
             <GroupOptionsDropdown groupId={props.group.id} active={optionForm} setActive={(value) => SetOptionForm(value)} handleRename={() => setRename(true)}/>
            
            <img
              className={
                groupOpen ? "chevron-down flip" : "chevron-down"
              }
              src={SensorChevron}
              onClick={(e) =>{
                setGroupOpen(!groupOpen)
                 var hideGroupList = $(e.currentTarget).parents(".SensorGroup").children(".groupList");            
                $(hideGroupList).slideToggle("fast", "swing");
              }}

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

