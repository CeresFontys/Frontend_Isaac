/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetSensorDbData } from "./SensorDbData";
import { SensorMqttData } from "./SensorMqttData";
import { useDispatch, useSelector } from "react-redux";
import SensorItem from "./SensorItem";
import "./SensorList.css";
import SensorGroup from "./SensorGroup";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { RandomizeData } from "./tempRanomizeData";
import { updateSensorGroup, setSensors } from "../../../actions";
import AddSensorGroupForm from "./AddSensorGroupForm";
import Axios from "axios";

function SensorList() {
  const dispatch = useDispatch();
  const sensors = useSelector((state) => state.sensors);
  const groups = useSelector((state) => state.groups);
  const [groupFormActive, setGroupFormActive] = useState(false)
  GetSensorDbData();
  SensorMqttData(); 
  // RandomizeData();
  
  let sensorGroups = <div>Loading sensors..</div>;
  let individualSensors = [];
  if (sensors) {
    sensors.sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
    if (groups) {
      sensorGroups = [];
      groups.forEach((group, i) => {
        let groupSensors = sensors.filter((sensor) => {
          if (sensor.groupId !== null) {
            return sensor.groupId == group.id;
          }
        });
        groupSensors.forEach((s, i) => {
          s.uiIndex = i;
        });
        sensorGroups.push(
          <SensorGroup key={group.id} group={group} sensors={groupSensors} />
        );
      });
    }
    individualSensors = [];
    let iSensors = sensors.filter((sensor, i) => {
      return sensor.groupId == null;
    });
    iSensors.forEach((sensor, i) => {
      sensor.uiIndex = i;
      return individualSensors.push(
        <SensorItem key={sensor.id} sensor={sensor} />
      );
    });
  }

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId == source.droppableId) {
      return;
    }
    let DraggedSensor = sensors.filter(sensor => {
      return sensor.id == draggableId;
    });

    let destGroupId = destination.droppableId == "MainDropCont" ? null : parseInt(destination.droppableId);
    const relationObj = {id: DraggedSensor[0].id, groupId: destGroupId};

    const relationObjJson = {
      "id":DraggedSensor[0].id,
      "name":DraggedSensor[0].name,
      "x":DraggedSensor[0].x,
      "y":DraggedSensor[0].y,
      "floor":DraggedSensor[0].floor,
     "groupId":destGroupId }
    dispatch( updateSensorGroup(relationObj));
    Axios({
      method: "put",
      url: "http://localhost:5002/api/sensor",
      data: relationObjJson,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error);
      });

  };

  return (
    <div id="SensorListContainer">
      <div>
        <h2>Sensors</h2>
        <span className="AddGroupBtn" title="Add group" onClick={() => setGroupFormActive(!groupFormActive)}>+</span>
      </div>
      <AddSensorGroupForm active={groupFormActive} onClick={(value) => setGroupFormActive(value)} />
      <div className="SensorListContainer">
        <DragDropContext onDragEnd={onDragEnd}>
          {sensorGroups}
          <Droppable droppableId="MainDropCont">
            {(provided) => (
              <section
                className="SensorList"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {individualSensors}
                {provided.placeholder}
              </section>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default SensorList;
