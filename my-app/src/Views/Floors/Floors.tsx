import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AddFloor from "./Components/AddFloor";
import DropDown from "./Components/DropDown";
import SensorList from './Components/SensorList';


class FloorsPage extends Component { 
    render(){
     return (
            <div>floors   
                <br/>        
               <SensorList />        
            </div>
        
    );
    }
    
        <h2 className="headerpos">Floor</h2>
        <DropDown />
}

export default FloorsPage;
