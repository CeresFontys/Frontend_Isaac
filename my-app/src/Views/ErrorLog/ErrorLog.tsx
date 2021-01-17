import React, {Component, useEffect, useState} from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./ErrorLog.css";
import * as signalR from "@microsoft/signalr";
import {useAxiosGet} from "../../Hooks/HttpRequest";
import {HubConnectionBuilder} from "@microsoft/signalr";
import ErrorComponent from "./Components/ErrorComponent";








function ErrorLogPage(){

	// let connection = new signalR.HubConnectionBuilder()
	// 	.withUrl("/errorLogHub")
	// 	.build();
	//
	// connection.on("ReceiveErrors", data => {
	// 	console.log(data);
	// });


	const [ connection, setConnection ] = useState(null);


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

					connection.on('ReceiveErrors', message => {console.log(message)});
				})
				.catch(e => console.log('Connection failed: ', e));
		}
	}, [connection]);



	// const errorUrl = "http://localhost:5004/sensorerror";

	return(
		<div className="container error-container">
			<ErrorComponent/>
		</div>
	)
}

export default ErrorLogPage;


