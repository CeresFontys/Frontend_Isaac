import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "../Floors.css";
import { useAxiosGet } from "../../../Hooks/HttpRequest";
import { useDispatch, useSelector } from "react-redux";
import { SetFloor } from "../../../actions/";

import SettingsIcon from "../../../Media/icons/SettingsIcon.svg";

function DropDown(props) {
  const dispatch = useDispatch();
  const currentFloor = useSelector((state: any) => state.floors);
  const url = "http://localhost:5006/Floor/";
  let Floors = useAxiosGet(url);

  const [dropDownValue, setdropDownValue] = useState("Loading");
  const [isLoading, setisLoading] = useState(true);

  const UpdateFloor = (floor) => {
    dispatch(SetFloor(floor));
  };

  let floor = "loading";
  if (Floors.data) {
    if (isLoading == true) {
      setdropDownValue(Floors.data[0].name);
      UpdateFloor(Floors.data[0]);
      setisLoading(false);
      console.log(Floors.data);
    }

    floor = Floors.data.map((item) => (
      <Dropdown.Item
        as="button"
        value={item.id}
        onClick={() => {
          setdropDownValue(item.name);
          UpdateFloor(item);
        }}
      >
        <div>{item.name}</div>
      </Dropdown.Item>
    ));
  }

  return (
    <div className="topRowDropdown">
      {!isLoading && (
        <img
          className="sliderIcon"
          onClick={() => {
            props.onClick(!props.isVisible);
          }}
          src={SettingsIcon}
        ></img>
      )}
      <DropdownButton id="dropdown-item-button" title={dropDownValue}>
        {floor}
      </DropdownButton>
    </div>
  );
}

export default DropDown;
