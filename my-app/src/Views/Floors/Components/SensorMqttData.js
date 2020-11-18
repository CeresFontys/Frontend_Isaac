
import {useState, useEffect} from 'react';
import mqtt from 'mqtt';
import {useDispatch, useSelector} from 'react-redux';
import {update} from '../../../actions'
 

export function SensorMqttData(sensorList) {
  const dispatch = useDispatch();
  
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [updatedSensor, setUpdatedSensor] = useState(null);
  let mqttClient = null;
  const sensorsStoreData = useSelector(state => state.sensors);

  

  useEffect(() => {
	const topic = "#";
  mqttClient = mqtt.connect("wss://server.kurza.nl:8081", {protocol:"wss", username: "default", password: "Fontys123!"});
	mqttClient.on('connect', () => {
		setConnectionStatus(true);
		mqttClient.subscribe('#', function (err) {
			if (!err) {
			 console.log(err);
			}});
		})
    mqttClient.on('message', (topic, payload, packet) => {
    var updateSensor = {
      floor: getTextBetween(topic, "/", 1, 2),
      x: getTextBetween(topic, "/", 2, 3),
      y:getTextBetween(topic, "/", 3, 4),
      type: getTextBetween(topic, "/", 4, 5) =="sensor"?getTextBetween(topic, "/", 5, 6):getTextBetween(topic, "/", 4, 5),
      value: payload.toString()
    }
    setUpdatedSensor(updateSensor);
    console.log(updateSensor);  
    });

    return() => {
      mqttClient.unsubscribe('#', function (err) {
        if (!err) {
         console.log(err);
        }});
      }
  }, [ ])
  

    if(sensorsStoreData != null && updatedSensor){
    let updatedSensorData = sensorsStoreData;
    updatedSensorData.forEach(sensor => {
      if(sensor.floor == updatedSensor.floor &&
        sensor.x == updatedSensor.x &&
        sensor.y == updatedSensor.y){
          switch(updatedSensor.type){
            case "humidity":
              return sensor.humidity = updatedSensor.value;
            case "temperature":
             return sensor.temperature = updatedSensor.value;
            default:
              return;
          }
        }
    });
    dispatch(update(updatedSensorData));
  }
}

function getPosition(string, subString, index) {
  return string.split(subString, index).join(subString).length;
}

function getTextBetween(string, divider, index1, index2){
  return string.substring(
    getPosition(string, divider, index1) +1, 
    getPosition(string, divider, index2)
  )
}