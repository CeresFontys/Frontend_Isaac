import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddFloor from "./Components/AddFloor";
import DropDown from "./Components/DropDown";
import SensorList from "./Components/SensorList";


function FloorsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState(false);
  return (
    <div className="contentContainer">
      <h2 className="headerpos">Floor</h2>
      <DropDown
        isVisible={isVisible}
        value={value}
        onClick={(value) => setIsVisible(value)}
      />
      <AddFloor isVisible={isVisible} onClick={(value) => setValue(value)} />
      {/* <img src="data:image/png;base64, BLOB" /> */}
      <br />
      <SensorList />
    </div>
  );
}

export default FloorsPage;
