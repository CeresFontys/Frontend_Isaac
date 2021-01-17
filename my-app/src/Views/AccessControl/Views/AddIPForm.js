import Axios from "axios";
import React, { Component, useState } from "react";
import "../../Floors/Floors.css";
import {AccessControlService} from "../AccessControlService";
import {Whitelist} from "../Models/Whitelist";

function AddIPForm(props) {
    let service = new AccessControlService();
    const [location, setLocation] = useState("");
    const [IP, setIP] = useState("");
    const [errorMsg, setErrorMsg] = useState(<></>)

    const handleFormSubmit = () =>{
        if(location == "" ){
            setErrorMsg(<pre className="SGFormErrorMsg">Couldnt add ip make sure all values are filled in</pre>);
            return;
        }

       const newIp = {
           "ip":IP,
       }
       service.createWhitelist(new Whitelist(0, location, IP))
        .then((res) => {

        //  let groupList = groupsStoreData;
        //  groupList.push(res.data)
        //  dispatch(setGroups(groupList));
         props.refresh()
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error);
          setErrorMsg(<pre className="SGFormErrorMsg">Couldnt add IP due to server error, please try again later!</pre>);
        });
    }



  return (
    <div className="SGFormHolder AddIPForm">
        <div className={`${props.active}`}>
    <div className={`AddGroupForm`} >
         <form className="PForm">
            <p>Add IP address<span className="btnCLoseAddGroupForm" title="close" onClick={() => props.onClick(false)}>+</span></p>
            <input placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onLoad={() => setLocation(null)}
            ></input>
             <input placeholder="IP"
            value={IP}
            onChange={(e) => setIP(e.target.value)}
            onLoad={() => setIP(null)}
            ></input>
            <div className="SendFormBtnHolder">
            {errorMsg}
                <span onClick={() => handleFormSubmit()}>Add IP</span>

            </div>
        </form>
    </div>
    </div>
    </div>
  );
};

export default AddIPForm;
