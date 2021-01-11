export function getTemperature(temp){
    if(typeof temp === 'string'){
    return parseFloat(temp.replace(/,/g, '.')).toFixed(1) 
    }else{
      return parseFloat(temp).toFixed(1) 
    }
  }

  export function  getHumidity(hum){
    if(typeof hum === 'string'){
    return Math.floor(parseFloat(hum.replace(/,/g, '.')))
    }else{
      return Math.floor(parseFloat(hum))
    }
  }
  export function getTempStatuscolor(temp){
    if(temp > 30){ return "color-red"}
    else if(temp > 24){ return "color-yellow"}
    else if(temp > 14){return "color-green"}
    else{return "color-blue"}
  }

  export function getHumStatuscolor(hum){
    if(hum > 70){ return "color-red"}
    else if(hum > 50){ return "color-yellow"}
    else if(hum > 30){return "color-green"}
    else{return "color-blue"}
  }

  export function getSensorHeatmapArccolor(sensor){
    const colorGreen = "97, 253, 122";
    const colorYellow = "253, 247, 97";
    const colorRed = "255, 135, 98";
    const colorBlue = "54, 182, 222";
    const colorDissabled = "0, 0, 0";
    
    const statusColor = [getTempStatuscolor(sensor.temperature), getHumStatuscolor(sensor.humidity)];
    if(statusColor.includes("color-red")){return colorRed}
    if(statusColor.includes("color-yellow")){return colorYellow}
    if(statusColor.includes("color-blue")){return colorBlue}
    return colorGreen
 
  }