import React from "react";
import { Route, Redirect } from "react-router-dom";

const NotGuardedRoute = ({ component, isAuthenticated, ...rest }: any) => {
	const routeComponent = (props: any) =>
		isAuthenticated! ? (
			<Redirect to={{ pathname: "/floors" }} />
		) : (
			React.createElement(component, props) 
		);
	return <Route {...rest} render={routeComponent} />;
};

export default NotGuardedRoute;
