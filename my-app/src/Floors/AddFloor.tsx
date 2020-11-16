import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class AddFloor extends Component {
	state = {
		image: "",
		name: "",
		width: "",
		length: "",
	};

	handleChangeName = (event: any) => {
		this.setState({ name: event.target.value });
	};

	handleChangeImage = (event: any) => {
		this.setState({ image: event.target.value });
		console.log(event.target);
		event.target.label = event.target.value;
	};

	handleChangeWidth = (event: any) => {
		this.setState({ width: event.target.value });
	};

	handleChangeLength = (event: any) => {
		this.setState({ length: event.target.value });
	};

	handleSubmit = (event: any) => {
		event.preventDefault();

		const floor = {
			name: this.state.name,
			image: this.state.image,
			width: this.state.width,
			length: this.state.length,
		};
		//`https://localhost:5000/floor/
		axios.post(`https://localhost:5000/floor/`, { floor }).then((res) => {
			console.log(res);
			console.log(res.data);
		});
	};

	render() {
		return (
			<Form onSubmit={this.handleSubmit}>
				<h1>Floor</h1>
				<Form.Group controlId="formBasicImage">
					<Form.File onChange={this.handleChangeImage} />
				</Form.Group>
				<Form.Group controlId="formBasicName">
					<Form.Label>Name</Form.Label>
					<Form.Control
						type="name"
						placeholder="Enter name"
						onChange={this.handleChangeName}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="formBasicLength">
					<Form.Label>Length</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter length"
						onChange={this.handleChangeLength}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="formBasicWidth">
					<Form.Label>Width</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter width"
						onChange={this.handleChangeWidth}
					></Form.Control>
				</Form.Group>
				<Button type="submit">Add floor</Button>
			</Form>
		);
	}
}
export default AddFloor;
