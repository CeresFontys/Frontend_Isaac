import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AccessControl.css";
import {connect, RootStateOrAny, useDispatch, useSelector} from "react-redux";
import {User} from "./Models/User";
import {Whitelist} from "./Models/Whitelist";
import SensorOptionsIcon from "../../Media/icons/moreDots.png";
import {UserView} from "./Views/UserView";
import {WhiteListView} from "./Views/WhiteListView";
import {StartData} from "./Models/StartData";


interface IProps {
}

interface IState {
	users: User[],
	ips: Whitelist[]
}

export class AccessControlPage extends React.Component<IProps, IState> {
	constructor(props, context) {
		super(props, context);
		let data = new StartData();
		this.state = {
			users: data.users, ips: data.whitelists
		}
	}

	refresh(){
		let data = new StartData();
		this.setState({users: data.users, ips: data.whitelists})
	}

	removeWhitelist(page: AccessControlPage, whitelist: Whitelist){
		let ips = page.state.ips.filter((wl) => wl !== whitelist)
		page.setState({users: page.state.users, ips: ips})
	}

	removeUser(page: AccessControlPage, user: User){
		let users = page.state.users.filter((u) => u !== user)
		page.setState({users: users, ips: page.state.ips})
	}

	render() {
		return (
			<div>
				<button onClick={(event)=>{this.refresh()}}>Refresh</button>
				<div className="AccessUserList">
					{
						this.state.users.map((user, index) => {
							return <UserView user={user} page={this} removeAction={this.removeUser}></UserView>
						})
					}
				</div>
				<div className="AccessIpList">
					{
						this.state.ips.map((ip, index)=>{
						return <WhiteListView whitelist={ip} page={this} removeAction={this.removeWhitelist}></WhiteListView>
						})
					}
				</div>
			</div>
		);

	}
}

function mapStateToProps(state, props) {
	return {
		users: state.access.users,
		ips: state.access.ips
	};
}


export default connect(mapStateToProps)(AccessControlPage);;
