import React, { Component, useEffect, useState } from "react";
import "./Heatmap.css";
import { useAxiosGet } from "../../Hooks/HttpRequest";
import HeatmapCanvas from "./Components/HeatmapCanvas";
import {useSelector } from "react-redux";
import {getTempStatuscolor,getHumStatuscolor} from'../../Utils/SensorHelpers';

function Heatmap (){
    const sensors = useSelector((state) => state.sensors);
    let avgTemp = 20;
    let avgHum = 20;
    const [avgStats, setAvgStats] = useState(null);

    useEffect(()=>{
        if(sensors){
            setAvgStats(sensors.map((s, i) =>{
                console.log(s);
                console.log(s.name);
                console.log(s.temperature);
                return {temp:s.temperature, hum:s.humidity};
            }));  
           
            avgTemp = parseFloat(avgTemp).toFixed(2);
            avgHum = parseFloat(avgHum).toFixed(2);
            console.log(avgStats);
        }
    },sensors)
    
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
