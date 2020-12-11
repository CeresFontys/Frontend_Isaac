import heatmapImg from "../../../Media/images/IsaacBlueprint.png"
import React, {useEffect, useRef, useState } from "react";
import {useSelector } from "react-redux";


function HeatmapCanvas (){

    const sensors = useSelector((state) => state.sensors);
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [floorDimensions, setFloorDimensions] = useState(null);
 
    

    
    useEffect(() => {
        const canvas = canvasRef.current;
        console.log(canvas);
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        setFloorDimensions({
            width: canvas.width /32,
            height: canvas.height /14
        })
        const context = canvas.getContext("2d");
        contextRef.current = context;
        updateCanvasDimensions();

        window.addEventListener("resize", updateCanvasDimensions);
        return () => window.removeEventListener("resize", updateCanvasDimensions);
    }, [])

    const updateCanvasDimensions = () => {
        const canvas = canvasRef.current;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        setFloorDimensions({
            width: canvas.width /32,
            height: canvas.height /14
        })
    }

    if(sensors && floorDimensions){
        console.log(sensors)
        contextRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        sensors.forEach(sensor => {
            contextRef.current.fillStyle = "#73fe89a3";
            contextRef.current.beginPath();
            contextRef.current.arc(0, 0, 10, 0, 2 * Math.PI);
            contextRef.current.arc((floorDimensions.width*sensor.x), (floorDimensions.height*sensor.y), floorDimensions.width*2, 0, 2 * Math.PI);
            contextRef.current.fill();
            contextRef.current.closePath()
        });
    }
    
    const canvasHover = ({nativeEvent}) => {

    }

    const canvasClick = () => {

    }

    return(      
        <div>
            <img src={heatmapImg} alt="Cant load background image"/>
            <canvas 
                onClick={canvasClick}
                onMouseMove={canvasHover}
                ref={canvasRef}/>  
         </div>
        )
  
}

export default HeatmapCanvas;