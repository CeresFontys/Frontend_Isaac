import React from "react";
import Axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Logo from "../../images/isaac-primary-logo-rgb-transparent-250px.png";
import "../Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import authService from "../services/auth.service";

export default class Login extends React.Component {
	state = {
		email: "",
		password: "",
	};
	handleEmail = (event: any) => {
		this.setState({
			email: event.target.value,
		});
	};
	handlePassword = (event: any) => {
		this.setState({
			password: event.target.value,
		});
	};

	handleSubmit = (event: any) => {
		event.preventDefault();

		const user = {
			email: this.state.email,
			password: this.state.password,
		};
		authService.login(user.email, user.password);
	};

	render() {
		return (
			<Card
				style={{
					width: "30rem",
					height: "30rem",
					marginLeft: "auto",
					marginRight: "auto",
					marginTop: "14%",
					backgroundColor: "white",
				}}
			>
				<Card.Img
					style={{ marginLeft: "25%", width: "225px", height: "125px" }}
					variant="top"
					src={Logo}
				></Card.Img>
				<Card.Header style={{ backgroundColor: "white" }}>
					<h1 style={{ textAlign: "center", color: "grey" }}>Login</h1> <br />
					Welcome back! Login to acces the ISAAC heatmap
				</Card.Header>
				<Form onSubmit={this.handleSubmit}>
					<Form.Group style={{ marginTop: "5%" }} controlId="formBasicEmail">
						<Form.Control
							style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}
							type="email"
							name="email"
							placeholder="Enter email"
							onChange={this.handleEmail}
						/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Control
							style={{ width: "75%", marginLeft: "auto", marginRight: "auto" }}
							type="password"
							name="password"
							placeholder="Password"
							onChange={this.handlePassword}
						/>
					</Form.Group>
					<Button
						size="lg"
						style={{ width: "80%", marginLeft: "10%" }}
						variant="primary"
						type="submit"
					>
						Login
					</Button>
				</Form>
			</Card>
		);
	}
}
