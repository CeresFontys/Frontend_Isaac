import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { GetSensorDbData } from "./SensorDbData";
import { SensorMqttData } from "./SensorMqttData";
import { useSelector } from "react-redux";
import SensorItem from "./SensorItem";
import "./SensorList.css";
import SensorGroup from "./SensorGroup";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { RandomizeData } from "./tempRanomizeData";

function SensorList() {
   const sensors = useSelector((state) => state.sensors);
   const groups = useSelector((state) => state.groups);
	GetSensorDbData();
   SensorMqttData();
   RandomizeData();

	let sensorGroups = <div>Loading sensors..</div>;
	let individualSensors = [];
	if (sensors) {
      if(groups){
         sensorGroups = [];
         groups.forEach((group, i) =>{
            let groupSensors = sensors.filter((sensor)=>{
               return sensor.groupId == group.groupId;
           })
            sensorGroups.push(
               <SensorGroup key={i} name={group.name} sensors={groupSensors}/>
            )
         })
      }
		individualSensors = [];
      let iSensors = sensors.filter((sensor, i)=>{
        return sensor.groupId == null;
      });
      iSensors.forEach((sensor,i) =>{
         if(sensor.uiIndex == 0){
            sensor.uiIndex = i;
         }
         return individualSensors.push(<SensorItem key={i} sensor={sensor} index={sensor.uiIndex } />);
      })
    
	} 

	const onDragEnd = (result) => {
      const {destination, source, draggableId} = result;
      if(!destination){
         return;
      }
      if(destination.droppableId == source.droppableId &&
         destination.index == source.index){
            return;
         }

         // let DraggedSensor = sensors.filter((sensor, i)=>{
         //    return sensor.uiIndex == source.index;
         //  });
         //  console.log(DraggedSensor);
         //  DraggedSensor.uiIndex = destination.index;
         //  source.index = destination.index;
         // console.log(source.index +" "+destination.index)

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
