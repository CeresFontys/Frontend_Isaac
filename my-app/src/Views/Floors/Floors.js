import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddFloor from "./Components/AddFloor";
import DropDown from "./Components/DropDown";
import SensorList from "./Components/SensorList";
import Heatmap from "../Heatmap/Heatmap";
import Header from "../../Components/Header";
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";


function FloorsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [value, setValue] = useState(false);
  return (
    <>
    <Header />
    <Heatmap />
    <div id="SideBar">
      <Navigation />
    <div className="contentContainer">
      <h2 className="headerpos">Floor</h2>
      <DropDown
        isVisible={isVisible}
        value={value}
        onClick={(value) => setIsVisible(value)}
      />
      <AddFloor isVisible={isVisible} onClick={(value) => setValue(value)} />
      <br />
      <SensorList />
    </div>
     <Footer />
    </div>
    </>
  );
}

export default FloorsPage;
