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

    }
    const handleDisable = () =>{
        
    }

      return (
          <div ref={context} className={props.active?"activeContext PD":"PD"}>
              <p><i className="far fa-edit"></i> Rename</p>
              <p><i className="fas fa-ban"></i> Delete</p>
          </div>
      )
      
  }