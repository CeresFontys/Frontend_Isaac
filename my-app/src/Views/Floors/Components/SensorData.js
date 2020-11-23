import React, { Component } from "react";
import { Connector, subscribe } from 'react-mqtt-client'

class SensorData extends Component {
	render() {
		return (
			<Connector
				mqttProps={{
					url: 'wss://server.kurza.nl:8081',
					options: {
						protocol: "wss",
						username: "default",
						password: "Fontys123!"
					},
				}}
			>
				<Connected />
			</Connector>

		)
	}
}
export default SensorData;

const MessageList = props => {
	const { mqtt } = props
	return (
		<>
			{console.log(props)}
			{/* {props.data.map((d, i) => (
			//	console.log(d)
			))} */}//
		</>
	)
}

const Connected = subscribe({ topic: '#' })(MessageList)