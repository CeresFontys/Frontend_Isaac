import React from "react";
import Card from "react-bootstrap/esm/Card";
import authService from "../services/auth.service";
import AuthService from "../services/auth.service";

export default class Profile extends React.Component {
	constructor(props: any) {
		super(props);
	}

	render() {
		let userDetails;
		userDetails = authService.getCurrentUser();
		return (
			<Card>
				<Card.Header>
					<h1>{userDetails.Email}</h1>
				</Card.Header>
			</Card>
		);
	}
}
