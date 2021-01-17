import DefaultHeatmapImg from "../../../Media/images/IsaacBlueprint.png";
import SensorIcon from "../../../Media/icons/sensorHeatmapIcon.svg";
import SensorIconSelected from "../../../Media/icons/sensorHeatmapIconSelected.svg";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { relative } from "path";
import { setSelectedSensor } from "../../../actions";
import {
  getSensorHeatmapArccolor,
  getTempStatuscolor,
  getHumStatuscolor,
} from "../../../Utils/SensorHelpers";
import { distance } from "../../../Utils/HeatmapHelpers";

let circles = [];
function HeatmapCanvas() {
  const dispatch = useDispatch();
  const sensors = useSelector((state) => state.sensors);
  const selectedCircle = useSelector((state) => state.selectedSensor);
  const selectedFloor = useSelector((state) => state.floors);
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const heatmapImgRef = useRef(null);
  const [heatmapImgWidth, setHeatmapImgWidth] = useState({width:"0", height:"0"});
  const [heatmapImg, setHeatmapImg] = useState(DefaultHeatmapImg);
  let avgStats = {temp:0,hum:0}

  const requestRef = useRef(null);
  let floorDimensions = null;
  let maxCircleRadius = 0;
  var img = new Image();
  img.src = SensorIcon;
  var mouse = {
    x: 0,
    y: 0,
  };
  const [cursorStyle, setCursorStyle] = useState("default");

  useEffect(() => {
    if (selectedFloor == null) {
      return;
    }
    setHeatmapImg("data:image/jpeg;base64," + selectedFloor.image);
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    const context = canvas.getContext("2d");
    contextRef.current = context;
    setTimeout(() => {
      updateCanvasDimensions();
    }, 0.1);
    requestRef.current = requestAnimationFrame(animate);
    window.addEventListener("resize", updateCanvasDimensions);
    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("resize", updateCanvasDimensions);
    };
  }, [selectedFloor]);

  const updateCanvasDimensions = () => {
    setHeatmapImgWidth({width:heatmapImgRef.current.width, height:heatmapImgRef.current.height})
    const canvas = canvasRef.current;
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    floorDimensions = {
      width: canvas.width / selectedFloor.width,
      height: canvas.height / selectedFloor.length,
    };
    maxCircleRadius = floorDimensions.width * 3;
    initcircles();
  };

  function circle(x, y, radius, sensor, main, maxCircRadius) {
    this.main = main;
    this.sensor = sensor;
    this.radius = radius;
    this.opacity = 0.4;
    this.maxRadius = maxCircRadius;
    this.x = x;
    this.y = y;
    this.img = img;
    this.imgCrop = 7;

    this.draw = () => {
      contextRef.current.beginPath();
      contextRef.current.fillStyle = `rgba(${getSensorHeatmapArccolor(
        this.sensor
      )}, ${this.opacity})`;
      contextRef.current.arc(x, y, this.radius, 0, 2 * Math.PI);
      contextRef.current.fill();
      if (main) {
        contextRef.current.drawImage(
          this.img,
          x - (floorDimensions.width - this.imgCrop) / 2,
          y - (floorDimensions.width - this.imgCrop) / 2,
          floorDimensions.width - this.imgCrop,
          floorDimensions.width - this.imgCrop
        );
      }
      contextRef.current.closePath();
    };

    this.update = () => {
      this.radius >= this.maxRadius ? (this.radius = 0) : (this.radius += 0.05);
      this.opacity =
        (this.maxRadius - this.radius) / this.maxRadius >= 0.4
          ? (this.opacity = 0.4)
          : (this.opacity = (this.maxRadius - this.radius) / this.maxRadius);
      this.draw();
    };
  }
  const initcircles = () => {
    circles = [];
    if (floorDimensions && sensors) {
      sensors.forEach((sensor) => {
        const x = floorDimensions.width * sensor.x - floorDimensions.width / 2;
        const y =
          floorDimensions.height * sensor.y - floorDimensions.height / 2;
        circles.push(new circle(x, y, 0, sensor, true, maxCircleRadius));
        circles.push(
          new circle(
            x,
            y,
            floorDimensions.width,
            sensor,
            false,
            maxCircleRadius
          )
        );
        circles.push(
          new circle(
            x,
            y,
            floorDimensions.width * 2,
            sensor,
            false,
            maxCircleRadius
          )
        );
      });
      
    }
  };
  if(sensors){

    var avgTemp =0;
    var avgHum =0
   
    sensors.forEach(s =>{
      avgTemp +=  s.temperature;
      avgHum +=  s.humidity
    })

      avgTemp = (avgTemp / sensors.length).toFixed(1);
      avgHum = (avgHum / sensors.length).toFixed(1);
      avgStats ={temp:avgTemp, hum:avgHum};
  }

  const [tooltip, setTooltip] = useState(null);
  const [HoveredSensor, setHoveredSensor] = useState(null);
  const [tooltipSensor, setTooltipSensor] = useState(null);
  const canvasHover = (evt) => {
    var rect = canvasRef.current.getBoundingClientRect();
    mouse.x = evt.clientX - rect.left;
    mouse.y = evt.clientY - rect.top;

    let hoveredCircle = false;
    let closestDistance = 999;
    if (circles)
      circles.forEach((c) => {
        if (
          distance(c.x, c.y, mouse.x, mouse.y) < c.radius &&
          distance(c.x, c.y, mouse.x, mouse.y) < closestDistance
        ) {
          closestDistance = distance(c.x, c.y, mouse.x, mouse.y);
          hoveredCircle = true;
          setCursorStyle("pointer");

          setTooltip(
            <div
              className="heatMapToolTip"
              style={{ position: "absolute", top: c.y, left: c.x }}
            >
              <p>{c.sensor.name}</p>
              <p>
                Temp:{" "}
                <span className={getTempStatuscolor(c.sensor.temperature)}>
                  {c.sensor.temperature}°
                </span>
              </p>
              <p>
                Hum:{" "}
                <span className={getHumStatuscolor(c.sensor.humidity)}>
                  {c.sensor.humidity}%
                </span>
              </p>
            </div>
          );
          setTooltipSensor(c.sensor);
          setHoveredSensor(c.sensor);
        }
        if (!hoveredCircle) {
          setCursorStyle("default");
          if (!selectedCircle) {
            setTooltip(null);
          }
          setHoveredSensor(null);
        }
      });
  };
  if (selectedCircle != tooltipSensor && circles) {
    if (selectedCircle == null) {
      setTooltipSensor(null);
      if (HoveredSensor == null) {
        setTooltip(null);
      }
      return;
    }
    let circ = circles.filter((c) => {
      return c.sensor.id == selectedCircle.id && c.main == true;
    });
    if (circ[0]) {
      setTooltip(
        <div
          className="heatMapToolTip"
          style={{ position: "absolute", top: circ[0].y, left: circ[0].x }}
        >
          <p>{circ[0].sensor.name}</p>
          <p>
            Temp:{" "}
            <span className={getTempStatuscolor(circ[0].sensor.temperature)}>
              {circ[0].sensor.temperature}°
            </span>
          </p>
          <p>
            Hum:{" "}
            <span className={getHumStatuscolor(circ[0].sensor.humidity)}>
              {circ[0].sensor.humidity}%
            </span>
          </p>
        </div>
      );
      setTooltipSensor(circ[0].sensor);
    }
  }

  const canvasClick = () => {
    dispatch(setSelectedSensor(HoveredSensor));
  };
  const canvasLeave = () => {
    if (!selectedCircle) {
      setTooltip(null);
      setTooltipSensor(null);
    }
  };
  const animate = (evt) => {
    if (floorDimensions && circles.length > 0) {
      contextRef.current.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      
      circles.forEach((circle) => {
        circle.update();
      });
    }
    
    requestRef.current = requestAnimationFrame(animate);
  };

  return (
    <>
    <section className="avgHeatmap">
        <p>AVG TEMP <span className={getTempStatuscolor(avgStats.temp)}>{avgStats.temp}°</span></p>
        <p>AVG HUM  <span className={getHumStatuscolor(avgStats.hum)}>{avgStats.hum}%</span></p>
        </section>
    <div style={{ position: "relative" }}>
      <img
        src={heatmapImg}
        alt="Cant load heatmap" 
        onLoad={() => setHeatmapImgWidth({width:heatmapImgRef.current.width, height:heatmapImgRef.current.height})}
        ref={heatmapImgRef}
      />
      <canvas
        style={{ cursor: cursorStyle }}
        width={heatmapImgWidth.width}
        height={heatmapImgWidth.height}
        onClick={canvasClick}
        onMouseMove={canvasHover}
        onMouseLeave={canvasLeave}
        ref={canvasRef}
      />
      {tooltip}
    </div>
    </>
  );
}

export default HeatmapCanvas;
