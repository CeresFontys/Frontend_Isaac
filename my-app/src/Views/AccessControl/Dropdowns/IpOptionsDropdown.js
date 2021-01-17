import React, {Component} from 'react';

import {AccessControlService} from "./../AccessControlService";

export default function IpOptionsDropdown(props){
    const handleRename = async () => {
        var service = new AccessControlService();
        await service.updateWhitelist(props.whitelist)
        props.refresh();
    }
    const handleDelete = async () =>{
        var service = new AccessControlService();
        await service.deleteWhitelist(props.whitelist.id)
        props.refresh();
    }

    return (
        <div className={props.active?"activeContext PD":"PD"}>
            <p><i className="far fa-file-alt" onClick={() => handleRename()}></i> Rename</p>
            <p><i className="far fa-edit" onClick={() => handleDelete()}></i> Delete</p>
        </div>
    )

}
