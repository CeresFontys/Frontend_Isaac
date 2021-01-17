import React, {Component} from "react";
import {Whitelist} from "../Models/Whitelist";
import ThrashCanIcon from "../../../Media/icons/trash.png";
import {User} from "../Models/User";
import {AccessControlPage} from "../AccessControl";
import SensorOptionsIcon from "../../../Media/icons/moreDots.png";
import IpOptionsDropdown from "../Dropdowns/IpOptionsDropdown";

export class WhiteListView extends Component {
    props: {
        whitelist: Whitelist,
        page: AccessControlPage,
        removeAction: (page: AccessControlPage, whitelist: Whitelist) => void
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
        return (
            <div className="ipListItem">
                <span className="ipName">{this.props.whitelist.name}</span>
                <span className="ipIp">{this.props.whitelist.ip}</span>
                <div className="sensorOptionsHolder">
                    <img className="sensorOptionsIcon PD" src={SensorOptionsIcon} onClick={() => this.setState({optionForm: !this.state.optionForm})}/>
                    <IpOptionsDropdown refresh={this.props.refresh} whitelist={this.props.whitelist} active={this.state.optionForm} setActive={(value) => this.setState({optionForm: value})} />
                </div>
            </div>
        );
    }
}
