import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Views/Account/login.component";
import "./App.css";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
// import FloorsPage from "./Views/Floors/Floors";
import AccessControlPage from "./Views/AccessControl/AccessControl";
import ErrorLogPage from "./Views/ErrorLog/ErrorLog";
import Heatmap from "./Views/Heatmap/Heatmap";
import NotGuardedRoute from "../src/Routes/NotGuardedRoute";
import FloorsPage from "./Views/Floors/Floors";
import GuardedRoute from "./Routes/GuardedRoute";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				{/* <Heatmap /> */}
				<Switch>
					<NotGuardedRoute
						path="/login"
						isAuthenticated={localStorage.getItem("user")}
						exact
						component={Login}
					/>
					<div id="SideBar">
						<Navigation />
						<GuardedRoute exact path="/floors" component={FloorsPage} />
						<GuardedRoute
							exact
							path="/access-control"
							isAuthenticated={localStorage.getItem("user")}
							component={AccessControlPage}
						/>
						<GuardedRoute
							exact
							path="/errorlog"
							isAuthenticated={localStorage.getItem("user")}
							component={ErrorLogPage}
						/>
					</div>
					<Route path="/" render={() => <div>404</div>} />
				</Switch>
			</BrowserRouter>
		);
	}
}
export default App;
