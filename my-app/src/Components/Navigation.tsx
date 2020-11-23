import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import ErrorIcon from "../Media/icons/error.png";
import AccesIcon from "../Media/icons/acces.png";
import FloorIcon from "../Media/icons/floors.png";

class Navigation extends Component {
	render() {
		return (
			<div id="Navigation">
				<div id="Links">
					<div>
						<Link to="/">
							<img className="NavIcon FloorIcon" src={FloorIcon} alt="" />
							Floors
						</Link>
					</div>
					<div>
						<Link to="/access-control">
							<img className="NavIcon AccesIcon" src={AccesIcon} alt="" />
							Access control{" "}
						</Link>
					</div>
					<div>
						<Link to="/errorlog">
							<img className="NavIcon ErrorIcon" src={ErrorIcon} alt="" />
							Error logs{" "}
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Navigation;
