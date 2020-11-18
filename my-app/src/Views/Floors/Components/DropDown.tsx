import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "../Floors.css";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { useAxiosGet } from "../../../Hooks/HttpRequest";

class DropDown extends Component {
	state = {
		dropDownValue: "Floor 1",
	};

	GetData() {
		const url = "url";
		let Floors = useAxiosGet(url);
	}

	Floors = useAxiosGet("dhuwadhdw");

	changeValue(text: any) {
		this.setState({ dropDownValue: text });
	}

	render() {
		return (
			<div>
				<DropdownButton
					id="dropdown-item-button"
					title={this.state.dropDownValue}
				>
					<Dropdown.Item
						as="button"
						value="1"
						onClick={() => this.changeValue("this.context")}
					>
						<div>Item #1</div>
					</Dropdown.Item>
				</DropdownButton>
			</div>
		);
	}
}

export default DropDown;
