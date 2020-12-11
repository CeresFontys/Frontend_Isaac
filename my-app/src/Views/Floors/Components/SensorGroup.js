/* eslint-disable eqeqeq */
import React, { Component } from "react";
import SensorItem from "./SensorItem";
import "./SensorList.css";
import {
  getTemperature,
  getHumidity,
  getTempStatusCollor,
  getHumStatusCollor,
} from "./../Utils/SensorHelpers";
import SensorOptionsIcon from "../../../Media/icons/moreDots.png";
import SensorChevron from "../../../Media/icons/chevron.png";
import SensorGroupIconAlt from "../../../Media/icons/group-alt.png";
import { Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { updateUiIndex } from "../../../actions";

export default class SensorGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupOpen: false,
    };
  }

  getGroupData() {
    let GroupData = { temp: null, hum: null };
    this.props.sensors.forEach((s) => {
      if (GroupData.temp != null && s.temperature != null) {
        GroupData.temp = (GroupData.temp + s.temperature) / 2;
      }
      if (GroupData.hum != null && s.humidity != null) {
        GroupData.hum = (GroupData.hum + s.humidity) / 2;
      }
      if (GroupData.temp == null) {
        GroupData.temp = s.temperature;
      }
      if (GroupData.hum == null) {
        GroupData.hum = s.humidity;
      }
    });
    return GroupData;
  }
  render() {
    let groupdata = this.getGroupData();
    return (
      <div
        className={
          this.state.groupOpen ? "SensorGroup group-open" : "SensorGroup"
        }
      >
        <section className="GroupHeader">
          <img className="GroupIcon" src={SensorGroupIconAlt} alt="" />
          <span className="SensorName">{this.props.group.name}</span>
          <span className={getTempStatusCollor(groupdata.temp)}>
            {getTemperature(groupdata.temp)}°
          </span>
          <span className={getHumStatusCollor(groupdata.hum)}>
            {getHumidity(groupdata.hum)}%
          </span>
          <div className="headerIcons">
            <img src={SensorOptionsIcon} alt="" />
            <img
              className={
                this.state.groupOpen ? "chevron-down flip" : "chevron-down"
              }
              src={SensorChevron}
              onClick={(e) =>{
                this.setState({ groupOpen: !this.state.groupOpen });
                var hideGroupsAfterAnimation;
                var hideGroupList = e.currentTarget.parentElement.parentElement.parentElement.querySelector(".groupList");
                if(hideGroupList.classList.contains("groupList-hidden")){
                  hideGroupList.classList.remove("groupList-hidden")
                  clearTimeout(hideGroupsAfterAnimation);
                }else{
                  clearTimeout(hideGroupsAfterAnimation);
                  hideGroupsAfterAnimation = setTimeout(()=>{hideGroupList.classList.add("groupList-hidden")},1000);
                }
              }
              }
              alt=""
            />
          </div>
        </section>
        <Droppable droppableId={this.props.group.id.toString()} isDragDisabled>
          {(provided) => (
            <section
              className="groupList groupList-hidden"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {this.props.sensors.map((sensor, i) => {
                
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
}
