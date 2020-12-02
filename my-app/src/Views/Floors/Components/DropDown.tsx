import React, { Component, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import "../Floors.css";
import { useAxiosGet } from "../../../Hooks/HttpRequest";
import { useDispatch, useSelector } from "react-redux";
import { SetFloor } from "../../../actions";
import SettingsIcon from "../../../Media/icons/SettingsIcon.svg";

function DropDown(props) {
  const dispatch = useDispatch();
  const currentFloor = useSelector((state: any) => state.floors);
  const url = "http://localhost:5006/floor";
  let Floors = useAxiosGet(url);

  const [dropDownValue, setdropDownValue] = useState("Loading");
  const [isLoading, setisLoading] = useState(true);

  const UpdateFloor = (floorId) => {
    dispatch(SetFloor(floorId));
  };

  let floor = "loading";
  if (Floors.data) {
    if (isLoading == true) {
      setdropDownValue(Floors.data[0].name);
      UpdateFloor(Floors.data[0].id);
      setisLoading(false);
    }
    floor = Floors.data.map((item, key) => (
      <Dropdown.Item
        as="button"
        value={item.id}
        onClick={() => {
          setdropDownValue(item.name);
          UpdateFloor(item.id);
        }}
      >
        <div>{item.name}</div>
      </Dropdown.Item>
    ));
  }
  if (Floors.error) {
    alert("Database is not responding, please try again later.");
  }

  return (
    <div className="topRowDropdown">
      <img
        className="sliderIcon"
        onClick={() => {
          props.onClick(!props.isVisible);
        }}
        src={SettingsIcon}
      ></img>
      <DropdownButton id="dropdown-item-button" title={dropDownValue}>
        {floor}
      </DropdownButton>
    </div>
  );
}

export default DropDown;
