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
import PlusSignIcon from "../../../src/Media/icons/plus.png";
import Header from "../../Components/Header";
import Heatmap from "../Heatmap/Heatmap";
import Navigation from "../../Components/Navigation";
import Footer from "../../Components/Footer";


interface IProps {
}

interface IState {
	users: User[],
	ips: Whitelist[],
	whitelistDropdown: boolean,
	userDropdown: boolean,
	whitelistFormData: IWhitelistFormData,
	userFormData: IUserFormData
}

interface IUserFormData {
	name: string,
	email: string,
	password: string
}

interface IWhitelistFormData{
	name: string,
	ip: string
}

export class AccessControlPage extends React.Component<IProps, IState> {
	constructor(props, context) {
		super(props, context);
		let data = new StartData();
		this.state = {
			users: data.users, ips: data.whitelists, whitelistDropdown: false, userDropdown: false, userFormData: {name: "", email: "", password:""}, whitelistFormData: {name: "", ip: ""}
		}
	}

	refresh(page: AccessControlPage){
		let data = new StartData();
		page.setState({users: data.users, ips: data.whitelists})
	}

	whitelistDropdown(page: AccessControlPage){
		if(this.state.whitelistDropdown){
			page.setState({whitelistDropdown: false})
		} else {
			page.setState({whitelistDropdown: true})
		}
	}

	userDropdown(page: AccessControlPage){
		if(this.state.userDropdown){
			page.setState({userDropdown: false})
		} else {
			page.setState({userDropdown: true})
		}
	}

	whitelistDropdownForm(){
		if(this.state.whitelistDropdown){
			return(
				<form>
					<label>
						Name:
						<input type="text" name="Name"  onChange={(event) => this.handleWhitelistNameChange(event)} />
					</label>
					<label>
						Ip:
						<input type="text" name="Ip Address"  onChange={(event) => this.handleWhitelistIpChange(event)}/>
					</label>
					<button onClick={(event) => this.handleWhitelistSubmit(event)}>Submit</button>
				</form>
			)
		}
	}

	handleWhitelistNameChange(event){
		let data = this.state.whitelistFormData;
		this.setState({whitelistFormData: {name: event.target.value, ip: data.ip}})
	}

	handleWhitelistIpChange(event){
		let data = this.state.whitelistFormData;
		this.setState({whitelistFormData: {name: data.name, ip: event.target.value}})
	}

	handleWhitelistSubmit(event){
		event.preventDefault();
		this.addWhitelist(this, {name: this.state.whitelistFormData.name, ip: this.state.whitelistFormData.ip, id: 1})
	}

	userDropdownForm(){
		if(this.state.userDropdown){
			return(
				<form>
					<div>
						<label>
							Name:
							<input type="text" name="Name" onChange={(event) => this.handleUserNameChange(event)}/>
						</label>
					</div>
					<div>
						<label>
							Email:
							<input type="text" name="Email" onChange={(event) => this.handleUserEmailChange(event)}/>
						</label>
					</div>
					<div>
						<label>
							Password:
							<input type="password" name="Password" onChange={(event) => this.handleUserPasswordChange(event)}/>
						</label>
					</div>
					<button onClick={(event) => this.handleUserSubmit(event)}>Submit</button>
				</form>
			)
		}
	}

	handleUserNameChange(event){
		let data = this.state.userFormData;
		this.setState({userFormData: {name: event.target.value, email: data.email, password: data.password}})
	}
	handleUserEmailChange(event){
		let data = this.state.userFormData;
		this.setState({userFormData: {name: data.name, email: event.target.value, password: data.password}})
	}
	handleUserPasswordChange(event){
		let data = this.state.userFormData;
		this.setState({userFormData: {name: data.name, email: data.email, password: event.target.value}})
	}
	handleUserSubmit(event){
		event.preventDefault();
		this.addUser(this, new User(1, this.state.userFormData.name, this.state.userFormData.email))
	}

	removeWhitelist(page: AccessControlPage, whitelist: Whitelist){
		let ips = page.state.ips.filter((wl) => wl !== whitelist);
		page.setState({users: page.state.users, ips: ips, whitelistDropdown: page.state.whitelistDropdown, userDropdown: page.state.userDropdown});
	}

	removeUser(page: AccessControlPage, user: User){
		let users = page.state.users.filter((u) => u !== user);
		page.setState({users: users, ips: page.state.ips, whitelistDropdown: page.state.whitelistDropdown, userDropdown: page.state.userDropdown});
	}

	addWhitelist(page: AccessControlPage, whitelist: Whitelist){
		let ips = page.state.ips.filter((wl) => true);
		ips.push(whitelist);
		page.setState({users: page.state.users, ips: ips, whitelistDropdown: page.state.whitelistDropdown, userDropdown: page.state.userDropdown});
	}

	addUser(page: AccessControlPage, user: User){
		let users = page.state.users.filter((u) => true);
		users.push(user);
		page.setState({users: users, ips: page.state.ips, whitelistDropdown: page.state.whitelistDropdown, userDropdown: page.state.userDropdown});
	}

	render() {
		return (
			<>
	<Header />
    <Heatmap />
    <div id="SideBar">
      <Navigation />
			<div className="contentContainer">
			
				<button onClick={(event)=>{this.refresh(this)}}>Refresh</button>
				{this.userDropdownForm()}
				<div className="AccessUserHeader"><div className="AccessUserTitle">Users:</div><img className="AccessUserAdd" src={PlusSignIcon} onClick={(event)=>{this.userDropdown(this)}}></img></div>
					<div className="AccessUserList">
					{
						this.state.users.map((user, index) => {
							return <UserView user={user} page={this} removeAction={this.removeUser}></UserView>
						})
					}
				</div>
				{this.whitelistDropdownForm()}
				<div className="AccessIpHeader"><div className="AccessIpTitle">Whitelist:</div><img className="AccessIpAdd" src={PlusSignIcon} onClick={(event)=>{this.whitelistDropdown(this)}}></img></div>
				<div className="AccessIpList">
					{
						this.state.ips.map((ip, index)=>{
						return <WhiteListView whitelist={ip} page={this} removeAction={this.removeWhitelist}></WhiteListView>
						})
					}
				</div>
			
			</div>
			<Footer/>
			</div>
			</>
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
