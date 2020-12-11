import React, { Component } from "react";
import "./Heatmap.css";
import { useAxiosGet } from "../../Hooks/HttpRequest";
import HeatmapCanvas from "./Components/HeatmapCanvas";

function Heatmap (){

    return( 
      
       <div id="heatmapContainer"> heatmap
       <HeatmapCanvas />
       
       </div>
    )
  
}

export default Heatmap;
