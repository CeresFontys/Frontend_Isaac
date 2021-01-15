import React, {Component} from 'react';

export default function UserOptionsDropdown(props){
    const handleRename = () => {

    }
    const handleDelete = () =>{

    }

    return (
        <div className={props.active?"activeContext PD":"PD"}>
            <p><i className="far fa-file-alt" onClick={handleRename()}></i> Rename</p>
            <p><i className="far fa-edit" onClick={handleDelete()}></i> Delete</p>
        </div>
    )
}
