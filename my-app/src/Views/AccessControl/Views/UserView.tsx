import React, {Component} from "react";
import {User} from "../Models/User";
import {Whitelist} from "../Models/Whitelist";
import {AccessControlPage} from "../AccessControl";
import ThrashCanIcon from "../../../Media/icons/trash.png";

export class UserView extends Component {
    props: {
        user: User,
        page: AccessControlPage,
        removeAction: (page: AccessControlPage, user: User) => void
    }
    render() {
        let admin = null;
        if(this.props.user.roles.some((role) => role=="admin")){
            admin = <span className="userAdmin">Admin</span>
        }

        return (
            <div className="userListItem">
                <span className="userName">{this.props.user.name}</span>
                {admin}
                <img className="userOptionsIcon" src={ThrashCanIcon} onClick={(event)=>{this.props.removeAction(this.props.page, this.props.user)}}/>
            </div>
        );
    }
}
