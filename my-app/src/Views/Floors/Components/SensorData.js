// import React, { Component } from "react";
// import ReactDOM from 'react-dom'
// import { Connector, subscribe } from 'react-mqtt-client'

// class SensorData extends Component {
// 	render() {
// 		return (
// 				<Connector
// 					mqttProps={{
// 						url: 'wss://server.kurza.nl:8081',
// 						options: { 
// 							protocol:"wss", 
// 							username: "default",
// 							password: "Fontys123!"
// 						},
// 					}}
// 				>
// 					<Connected />
// 				</Connector>

// 		)
// 	}
// }
// export default SensorData;

// const MessageList = props => {
// 	return (
// 		<>
// 		    {console.log(props)}
// 			{/* {props.data.map((d, i) => (
// 			//	console.log(d)
// 			))} */}
// 		</>
// 	)
// }

// const Connected = subscribe({ topic: '#' })(MessageList)



import React, {useState, useEffect} from 'react';
import mqtt from 'mqtt';
 

export default () => {
  
  const [connectionStatus, setConnectionStatus] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
	const topic = "#";
    const client = mqtt.connect("wss://server.kurza.nl:8081", {protocol:"wss", username: "default", password: "Fontys123!"});
	client.on('connect', () => {

		setConnectionStatus(true);
		console.log("connected");
		client.subscribe('#', function (err) {
			if (!err) {
			 console.log(err);
			}});
		})
    client.on('message', (topic, payload, packet) => {
	  setMessages(messages.concat(payload.toString()));
	  console.log(topic);

    });
  }, [])
 
  return (
    <>
	  
    </>
  )
}