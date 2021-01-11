import React, {Component, useEffect, useState} from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./ErrorLog.css";
import * as signalR from "@microsoft/signalr";
import {useAxiosGet} from "../../Hooks/HttpRequest";
import {HubConnectionBuilder} from "@microsoft/signalr";
import {forEach} from "react-bootstrap/ElementChildren";






function ErrorLogPage(){

	// let connection = new signalR.HubConnectionBuilder()
	// 	.withUrl("/errorLogHub")
	// 	.build();
	//
	// connection.on("ReceiveErrors", data => {
	// 	console.log(data);
	// });


	const [ connection, setConnection ] = useState(null);
	const [ content , setcontent]  = useState(<></>);

	useEffect(() => {
		const newConnection = new HubConnectionBuilder()
			.withUrl('http://localhost:5004/errorLogHub')
			.withAutomaticReconnect()
			.build();

		setConnection(newConnection);
	}, []);




	useEffect(() => {
		if (connection) {
			connection.start( {withCredentials: false})
				.then(result => {
					console.log('Connected!');

					connection.on('ReceiveErrors', message => {
						console.log(message)
						setcontent(
							message.map(
								(item) => (<div>{item.error}</div>)
						));
						// content = <></>;
						// content = message.forEach(
						// 	data => {
						// 	return <div>data.error</div>
						// 	}
						// )
					});

					connection.on('Connected', message => {
						console.log(message)
					});
				})
				.catch(e => console.log('Connection failed: ', e));
		}
	}, [connection]);



	// const errorUrl = "http://localhost:5004/sensorerror";

	return(<div>{content} Hoi</div>)
}




export default ErrorLogPage;


