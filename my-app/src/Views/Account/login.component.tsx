import React from "react";
import authService from "./services/auth.service";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Logo from "../../Media/images/isaac-primary-logo-rgb-transparent-250px.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./login.component.css";

interface Props {}

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
			<div className="Background">
				<Card className="LoginForm">
					<Card.Img className="LoginFormLogo" src={Logo}></Card.Img>
					<Card.Header style={{ backgroundColor: "white" }}>
						<h1>Login</h1> <br />
						<span>Login to acces the ISAAC heatmap</span>
						<br />
						<span>
							Did you <a href="/login"> Forget your password?</a>
						</span>
					</Card.Header>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group controlId="formBasicEmail">
							<Form.Control
								type="email"
								name="email"
								placeholder="Enter email"
								onChange={this.handleEmail}
							/>
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Control
								type="password"
								name="password"
								placeholder="Password"
								onChange={this.handlePassword}
							/>
						</Form.Group>
						<Button size="lg" variant="primary" type="submit">
							Login
						</Button>
					</Form>
				</Card>
			</div>
		);
	}
}
