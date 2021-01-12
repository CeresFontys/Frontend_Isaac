import React, { Component } from "react";
import "./Heatmap.css";
import { useAxiosGet } from "../../Hooks/HttpRequest";
import HeatmapCanvas from "./Components/HeatmapCanvas";
import {useSelector } from "react-redux";
import {getTempStatuscolor,getHumStatuscolor} from'../../Utils/SensorHelpers';

function Heatmap (){
    const sensors = useSelector((state) => state.sensors);
    let avgTemp = 20;
    let avgHum = 20;
    if(sensors){
        avgTemp = sensors.reduce((a, b) => +a + +b.temperature, 0) / sensors.length;
        avgHum = sensors.reduce((a, b) => +a + +b.humidity, 0) / sensors.length;
        avgTemp = parseFloat(avgTemp).toFixed(2);
        avgHum = parseFloat(avgHum).toFixed(2);
    }
    return( 
      
       <div id="heatmapContainer">
           <div>
        <h1>Heatmap</h1>
        <section className="avgHeatmap">
        <p>AVG TEMP <span className={getTempStatuscolor(avgTemp)}>{avgTemp}°</span></p>
        <p>AVG HUM  <span className={getHumStatuscolor(avgHum)}>{avgHum}%</span></p>
        </section>
       <HeatmapCanvas />
       </div>
       </div>
    )
  
}

export default Heatmap;
