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

function SensorList() {
  const dispatch = useDispatch();
  const sensors = useSelector((state) => state.sensors);
  const groups = useSelector((state) => state.groups);
  GetSensorDbData();
  SensorMqttData(); 
  RandomizeData();
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
    dispatch( updateSensorGroup({ id: DraggedSensor[0].id, groupId: destGroupId }));

  };

  return (
    <div id="SensorListContainer">
      <div>
        <h2>Sensors</h2>
        <span>+</span>
      </div>
      <div>
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
