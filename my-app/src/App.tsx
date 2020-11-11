import React, { Component } from "react";
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Authenticate from 'react-openidconnect';
import OidcSettings from "./oidcsettings";
import { Router, Route } from "react-router";
import "./App.css";
import Login from "./Account/components/login.component";
import Profile from "./Account/components/profile.component";

export class App extends Component<{}, {}> {
	render() {
		return (
			<>
				<Route path="/login" component={Login} />
				<Route path="/profile" component={Profile} />
			</>
		);
	}
}

export default App;
