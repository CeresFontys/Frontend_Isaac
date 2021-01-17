import React, {Component} from "react";
import {User} from "../Models/User";
import {AccessControlPage} from "../AccessControl";
import SensorOptionsIcon from "../../../Media/icons/moreDots.png";
import UserOptionsDropdown from "../Dropdowns/UserOptionsDropdown";

export class UserView extends Component {
    props: {
        user: User,
        page: AccessControlPage,
        removeAction: (page: AccessControlPage, user: User) => void,
        refresh: () => void
    }
    state:{
        optionForm: boolean;
    }
    constructor(props, context) {
        super(props, context)
        this.state = {optionForm: false}
    }

    render() {
        let admin = null;
        /*
        if(this.props.user.roles.some((role) => role=="admin")){
            admin = <span className="userAdmin">Admin</span>
        }
        */

        return (
            <div className="userListItem">
                <span className="userName">{this.props.user.email}</span>
                {admin}
                <div className="sensorOptionsHolder">
                    <img className="sensorOptionsIcon PD" src={SensorOptionsIcon} onClick={() => this.setState({optionForm: !this.state.optionForm})}/>
                    <UserOptionsDropdown refresh={this.props.refresh} user={this.props.user} active={this.state.optionForm} setActive={(value) => this.setState({optionForm: value})} />
                </div>
            </div>
        );
    }
}
