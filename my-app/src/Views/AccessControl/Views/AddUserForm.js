import Axios from "axios";
import React, { Component, useState } from "react";
import "../../Floors/Floors.css";

function AddUserForm(props) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState(<></>)
  
    const handleFormSubmit = () =>{
        if(username == "" ){
            setErrorMsg(<pre className="SGFormErrorMsg">Couldnt add user make sure all values are filled in</pre>);
            return;
        }

       const newUser = {
           "name":username,
       }
       Axios({
        method: "post",
        url: "http://localhost:5002/api/group",
        data: newUser,
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => {
          
        //  let groupList = groupsStoreData;
        //  groupList.push(res.data)
        //  dispatch(setGroups(groupList));
         window.location.reload();
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error);
          setErrorMsg(<pre className="SGFormErrorMsg">Couldnt add user due to server error, please try again later!</pre>);
        });
    }



  return (
    <div className="SGFormHolder AddUserForm">
        <div className={`${props.active}`}>
    <div className={`AddGroupForm`} >
         <form className="PForm">
            <p>Add User <span className="btnCLoseAddGroupForm" title="close" onClick={() => props.onClick(false)}>+</span></p>
            <input placeholder="Username" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onLoad={() => setUsername(null)}
            ></input>
             <input placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onLoad={() => setEmail(null)}
            ></input>
             <input placeholder="Password" 
             type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onLoad={() => setPassword(null)}
            ></input>
            <div className="SendFormBtnHolder">
            {errorMsg}
                <span onClick={() => handleFormSubmit()}>Add User</span>
               
            </div>
        </form>
    </div> 
    </div>
    </div>
  );
};

export default AddUserForm;