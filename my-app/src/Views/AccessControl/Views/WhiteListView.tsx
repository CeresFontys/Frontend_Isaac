import React, {Component} from "react";
import {Whitelist} from "../Models/Whitelist";
import ThrashCanIcon from "../../../Media/icons/trash.png";
import {User} from "../Models/User";
import {AccessControlPage} from "../AccessControl";

export class WhiteListView extends Component {
    props: {
        whitelist: Whitelist,
        page: AccessControlPage,
        removeAction: (page: AccessControlPage, whitelist: Whitelist) => void
    }
    render() {
        return (
            <div className="ipListItem">
                <span className="ipName">{this.props.whitelist.name}</span>
                <img className="ipOptionsIcon" src={ThrashCanIcon} onClick={(event)=>{this.props.removeAction(this.props.page, this.props.whitelist)}}/>
                <span className="ipIp">{this.props.whitelist.ip}</span>
            </div>
        );
    }
}
