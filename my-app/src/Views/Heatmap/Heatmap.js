import React, { Component, useEffect, useState } from "react";
import "./Heatmap.css";
import { useAxiosGet } from "../../Hooks/HttpRequest";
import HeatmapCanvas from "./Components/HeatmapCanvas";
import {useSelector } from "react-redux";
import {getTempStatuscolor,getHumStatuscolor} from'../../Utils/SensorHelpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faInfoCircle} from '@fortawesome/free-solid-svg-icons'

function Heatmap (){
    const [legenda, setLegenda] = useState(false)
    return( 
      
       <div id="heatmapContainer">
           <div>
        <h1>Heatmap</h1> <div className="LegendHolder"><FontAwesomeIcon  onClick={() => setLegenda(!legenda)} icon={faInfoCircle}/>

            {legenda && <div>
                <section>
                <p>Temperature</p>
                <p>&gt; 30°<span className="background-red"> </span></p>
                <p>&gt; 24° &lt; 30° <span className="background-yellow"> </span></p>
                <p>&gt; 14° &lt; 24°<span className="background-green"> </span></p>
                <p>&lt; 14° <span className="background-blue"> </span></p>
                </section>
                <section>
                <p>humidity</p>
                <p>&gt; 70%<span className="background-red"> </span></p>
                <p>&gt; 50° &lt; 70°<span className="background-yellow"> </span></p>
                <p>&gt; 30° &lt; 50°<span className="background-green"> </span></p>
                <p>&lt; 30° <span className="background-blue"> </span></p>
                </section>
                </div>
                }
        </div>
        
       <HeatmapCanvas />
       </div>
       </div>
    )
  
}

export default Heatmap;
