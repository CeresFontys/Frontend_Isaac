import React, {Component} from 'react';



export default function SensorOptionsDropdown(props){

   
    const handleRename = () => {

    }
    const handleDisable = () =>{

    }
 

      return (
          <div className={props.active?"activeContext PD":"PD"}>
              <p><i className="far fa-file-alt"></i> Sensor log</p>
              <p><i className="far fa-edit"></i> Rename</p>
              <p><i className="fas fa-ban"></i> Disable</p>
          </div>
      )
  }