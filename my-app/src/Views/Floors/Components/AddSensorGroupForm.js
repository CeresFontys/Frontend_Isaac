import Axios from "axios";
import React, { Component, useState } from "react";
import "../Floors.css";
import {useDispatch, useSelector} from 'react-redux';
import {setGroups} from '../../../actions'

function AddSensorGroupForm(props) {
    const dispatch = useDispatch();
    const floor = useSelector((state) => state.floors)
    const [groupName, setGroupName] = useState(null);
    const [errorMsg, setErrorMsg] = useState(<></>)
    const groupsStoreData = useSelector(state => state.groups);
  
    console.log(groupsStoreData);
    const handleFormSubmit = () =>{
        if(floor ==null || groupName == null ){
            setErrorMsg(<pre className="SGFormErrorMsg">Couldnt add group make sure sensorgroup name is filled in</pre>);
        }

       const newGroup = {
           "name":groupName,
           "floor":floor.id.toString()
       }
       Axios({
        method: "post",
        url: "http://localhost:5002/api/group",
        data: newGroup,
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          console.log(res.data)
          
        //  let groupList = groupsStoreData;
        //  groupList.push(res.data)
        //  dispatch(setGroups(groupList));
         window.location.reload();
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error);
          setErrorMsg(<pre className="SGFormErrorMsg">Couldnt add group due to server error, please try again later!</pre>);
        });
    }



  return (
    <div className="SGFormHolder">
        <div className={`${props.active}`}>
    <div className={`AddGroupForm`} >
         <form className="PForm">
            <p>Add Sensorgroup <span className="btnCLoseAddGroupForm" title="close" onClick={() => props.onClick(false)}>+</span></p>
            <input placeholder="Sensorgroup Name" 
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            onLoad={() => setGroupName(null)}
            ></input>
            <div className="SendFormBtnHolder">
            {errorMsg}
                <span onClick={() => handleFormSubmit()}>Add Group</span>
               
            </div>
        </form>
    </div> 
    </div>
    </div>
  );
};

export default AddSensorGroupForm;
