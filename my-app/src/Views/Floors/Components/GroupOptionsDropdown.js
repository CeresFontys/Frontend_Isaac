import axios from 'axios';
import React, {Component, useEffect, useRef} from 'react';


export default function SensorOptionsDropdown(props){
    const context = useRef();
    useEffect(() => {
        // add when mounted
        document.addEventListener("mousedown", handleClick);
        // return function to be called when unmounted
        return () => {
          document.removeEventListener("mousedown", handleClick);
        };
      }, []);
      const handleClick = e => {
        if (!context.current.contains(e.target)) {
          props.setActive(false)
        }
      };
   
    const handleRename = () => {
        props.handleRename();
        props.setActive(false)
    }
    const handleDelete = () =>{
        axios({
            method: "delete",
            url: `http://localhost:5002/api/group/test/${props.groupId}`,
          })
            .then((res) => {      
             window.location.reload();
            })
            .catch((error) => {
              console.log(error.response);
              console.log(error);
            }); 
    }

      return (
          <div ref={context} className={props.active?"activeContext PD":"PD"}>
              <p onClick={() => handleRename()}><i className="far fa-edit"></i> Rename</p>
              <p onClick={() =>handleDelete()}><i className="fas fa-ban"></i> Delete</p>
          </div>
      )
      
  }