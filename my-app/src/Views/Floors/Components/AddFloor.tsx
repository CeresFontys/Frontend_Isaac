import React, { Component } from "react";
import axios from "axios";
import "../Views/Account/components/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Floors.css";

class AddFloor extends Component {
	state = {
		id: "",
		image: "",
		name: "",
		width: "",
		length: "",
		SubmitMessage: <div></div>,
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
		//http://localhost:5006/floor
		axios
			.post(`http://jsonplaceholder.com`, { floor })
			.then((res) => {
				console.log(res);
				console.log(res.data);
				this.setState({
					SubmitMessage: <div className="succes">Succes</div>,
				});
			})
			.catch((error) => {
				console.log(error);
				this.setState({
					SubmitMessage: (
						<div className="unsuccesfull">Unsuccesfull try again later</div>
					),
				});
			});
	};

	render() {
		return (
			<Form className="box" onSubmit={this.handleSubmit}>
				<Form.Group className="filearea" controlId="formBasicImage">
					<Form.File required onChange={this.handleChangeImage} />
				</Form.Group>
				<Form.Group controlId="formBasicName">
					<Form.Control
						type="name"
						placeholder="Enter name"
						onChange={this.handleChangeName}
						className="textarea"
						required
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="formBasicLength">
					<Form.Control
						type="number"
						placeholder="Enter length"
						onChange={this.handleChangeLength}
						className="textarea"
						required
					></Form.Control>
				</Form.Group>

				<Form.Group controlId="formBasicWidth">
					<Form.Control
						type="number"
						placeholder="Enter width"
						onChange={this.handleChangeWidth}
						className="textarea"
						required
					></Form.Control>
				</Form.Group>
				<div className="row rowpos">
					{this.state.SubmitMessage}
					<Button type="submit" className="btn btnpos">
						Save
					</Button>
				</div>
			</Form>
		);
	}
}
export default AddFloor;
