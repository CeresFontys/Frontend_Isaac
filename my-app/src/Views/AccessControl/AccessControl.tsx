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
import {AccessControlService} from "./AccessControlService";


interface IProps {
}

interface IState {
	service: AccessControlService,
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
			service: new AccessControlService(),users: data.users, ips: data.whitelists, whitelistDropdown: false, userDropdown: false, userFormData: {name: "", email: "", password:""}, whitelistFormData: {name: "", ip: ""}
		}
	}
	async componentDidMount() {
		await this.refresh(this)
	}

	async refresh(page: AccessControlPage){
		page.setState({users: await this.state.service.getUsers(), ips: await this.state.service.getWhiteLists()})
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

	async handleWhitelistSubmit(event) {
		event.preventDefault();
		this.addWhitelist(this, {name: this.state.whitelistFormData.name, ip: this.state.whitelistFormData.ip, id: 0})
		await this.state.service.createWhitelist(new Whitelist(0, this.state.whitelistFormData.name, this.state.whitelistFormData.ip))
		await this.refresh(this)
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
	async handleUserSubmit(event){
		event.preventDefault();
		this.addUser(this, new User(0, this.state.userFormData.name, this.state.userFormData.email, 0, this.state.userFormData.password))
		await this.state.service.createUser(new User(0, this.state.userFormData.name, this.state.userFormData.email, 0, this.state.userFormData.password))
		await this.refresh(this)
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
				{this.userDropdownForm()}
				<div className="AccessUserHeader"><div className="AccessUserTitle">Users:</div><img className="AccessUserAdd" src={PlusSignIcon} onClick={(event)=>{this.userDropdown(this)}}></img></div>
					<div className="AccessUserList">
					{
						this.state.users.map((user, index) => {
							return <UserView refresh={() => this.refresh(this)} user={user} page={this} removeAction={this.removeUser}></UserView>
						})
					}
				</div>
				{this.whitelistDropdownForm()}
				<div className="AccessIpHeader"><div className="AccessIpTitle">Whitelist:</div><img className="AccessIpAdd" src={PlusSignIcon} onClick={(event)=>{this.whitelistDropdown(this)}}></img></div>
				<div className="AccessIpList">
					{
						this.state.ips.map((ip, index)=>{
						return <WhiteListView refresh={() => this.refresh(this)} whitelist={ip} page={this} removeAction={this.removeWhitelist}></WhiteListView>
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
