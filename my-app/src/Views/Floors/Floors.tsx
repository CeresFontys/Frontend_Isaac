import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SensorData from "./Components/SensorData";
import AddFloor from "./Components/AddFloor";
import DropDown from "./Components/DropDown";

class FloorsPage extends Component {
  render() {
    return (
      <div>
        <h2 className="headerpos">Floor</h2>
        <DropDown />
        <AddFloor />
        <h2 className="headerpos">Sensors</h2>
        <SensorData />
      </div>
    );
  }
}

export default FloorsPage;
