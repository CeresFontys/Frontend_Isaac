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
  export function getTempStatusCollor(temp){
    if(temp > 30){ return "SensorTemp color-red"}
    else if(temp > 24){ return "SensorTemp color-yellow"}
    else if(temp > 14){return "SensorTemp color-green"}
    else{return "SensorTemp color-blue"}
  }

  export function getHumStatusCollor(hum){
    if(hum > 70){ return "SensorHum color-red"}
    else if(hum > 50){ return "SensorHum color-yellow"}
    else if(hum > 30){return "SensorHum color-green"}
    else{return "SensorHum color-blue"}
  }