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
import SensorGroupIcon from "../../../Media/icons/group.png";
import SensorGroupIconAlt from "../../../Media/icons/group-alt.png";
import { Droppable } from "react-beautiful-dnd";

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
					<img className="GroupIcon" src={SensorGroupIconAlt} />
					<span className="SensorName">{this.props.name}</span>
					<span className={getTempStatusCollor(groupdata.temp)}>
						{getTemperature(groupdata.temp)}°
					</span>
					<span className={getHumStatusCollor(groupdata.hum)}>
						{getHumidity(groupdata.hum)}%
					</span>
					<div className="headerIcons">
						<img src={SensorOptionsIcon} />
						<img
							className={
								this.state.groupOpen ? "chevron-down flip" : "chevron-down"
							}
							src={SensorChevron}
							onClick={() =>
								this.setState({ groupOpen: !this.state.groupOpen })
							}
						/>
					</div>
				</section>
				<Droppable droppableId={this.props.name}>
					{(provided) => (
						<section
							className="groupList"
							ref={provided.innerRef}
							{...provided.droppableProps}
						>
							{this.props.sensors.map((sensor, i) => {
                            if(sensor.uiIndex ==0){
                                sensor.uiIndex =i;
                            }
							return	<SensorItem key={sensor.name} sensor={sensor} index={sensor.uiIndex} />
                            })}
							{provided.placeholder}
						</section>
					)}
				</Droppable>
			</div>
		);
	}
}
