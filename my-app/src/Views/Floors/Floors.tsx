import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SensorData from "./Components/SensorData";
import AddFloor from "./Components/AddFloor";
import DropDown from "./Components/DropDown";

class FloorsPage extends Component {
	render() {
		return (
			<div>
				<h3 className="headerpos">Floor</h3>
				<DropDown />
				<AddFloor />
				<h3 className="headerpos">Sensors</h3>
				<SensorData />
			</div>
		);
	}
}

export default FloorsPage;
