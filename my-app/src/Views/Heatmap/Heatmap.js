import React, { Component, useEffect, useState } from "react";
import "./Heatmap.css";
import { useAxiosGet } from "../../Hooks/HttpRequest";
import HeatmapCanvas from "./Components/HeatmapCanvas";
import {useSelector } from "react-redux";
import {getTempStatuscolor,getHumStatuscolor} from'../../Utils/SensorHelpers';

function Heatmap (){
    return( 
      
       <div id="heatmapContainer">
           <div>
        <h1>Heatmap</h1>
       <HeatmapCanvas />
       </div>
       </div>
    )
  
}

export default Heatmap;
