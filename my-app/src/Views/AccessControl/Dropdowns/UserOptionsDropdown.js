import React, {Component} from 'react';

import {AccessControlService} from "./../AccessControlService";

export default function UserOptionsDropdown(props){
    const handleRename = async () => {
        var service = new AccessControlService();
        await service.updateUser(props.user)
        props.refresh();
    }
    const handleDelete = async () => {
        var service = new AccessControlService();
        await service.deleteUser(props.user.id)
        props.refresh();
    }

    return (
        <div className={props.active?"activeContext PD":"PD"}>
            <p onClick={() => handleRename()}><i className="far fa-file-alt"></i> Rename</p>
            <p onClick={() => handleDelete()}><i className="far fa-edit"></i> Delete</p>
        </div>
    )

}
