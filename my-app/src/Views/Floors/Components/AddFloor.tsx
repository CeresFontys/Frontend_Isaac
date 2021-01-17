import React, { Component, useState } from "react";
import axios from "axios";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Floors.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SetFloor } from "../../../actions/";

function AddFloor(props) {
  const dispatch = useDispatch();
  const currentFloor = useSelector((state: any) => state.floors);
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [submitMessage, setSubmitMessage] = useState(<div></div>);

  useEffect(() => {
    setName(currentFloor == null ? "" : currentFloor.name);
    setLength(currentFloor == null ? "" : currentFloor.length);
    setWidth(currentFloor == null ? "" : currentFloor.width);
    setId(currentFloor == null ? "" : currentFloor.id);
  }, [currentFloor]);
  let floor = currentFloor;

  const handleClick = (event: any) => {
    if (window.confirm("Are you sure you want to delete this floor?")) {
      axios({
        method: "delete",
        url: "http://localhost:5006/Floor/" + id,
      })
        .then((res) => {
          console.log(res);
          console.log(res.data);
          setSubmitMessage(<div className="succesfulDelete">Succes</div>);
          dispatch(SetFloor(floor));
        })
        .catch((error) => {
          console.log(error.response);
          console.log(error);
          setSubmitMessage(
            <div className="unsuccesfullDelete">
              Unsuccesfull try again later
            </div>
          );
        });
    }
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    var bodyFormData = new FormData();
    bodyFormData.append("Floor.Id", id);
    bodyFormData.append("Floor.Name", name);
    bodyFormData.append("Floor.Length", length);
    bodyFormData.append("Floor.Width", width);
    bodyFormData.append("File", image);
    floor.id = id;
    floor.length = length;
    floor.width = width;
    floor.name = name;
    axios({
      method: "put",
      url: "http://localhost:5006/Floor/" + id,
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setSubmitMessage(<div className="succes">Succes</div>);
        dispatch(SetFloor(floor));
      })
      .catch((error) => {
        console.log(error.response);
        console.log(error);
        setSubmitMessage(
          <div className="unsuccesfull">Unsuccesfull try again later</div>
        );
      });
  };
  return (
    <div className={props.isVisible ? "box boxOpen" : "box"}>
      <Form onSubmit={(e: any) => handleSubmit(e)}>
        <Form.Group className="filearea" controlId="formBasicImage">
          <Form.File onChange={(e: any) => setImage(e.target.files[0])} />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="name"
            placeholder="Enter name"
            onChange={(e: any) => setName(e.target.value)}
            className="textarea"
            required
            value={name}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicLength">
          <Form.Control
            type="number"
            placeholder="Enter length"
            onChange={(e: any) => setLength(e.target.value)}
            className="textarea"
            required
            value={length}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicWidth">
          <Form.Control
            type="number"
            placeholder="Enter width"
            onChange={(e: any) => setWidth(e.target.value)}
            className="textarea"
            required
            value={width}
          ></Form.Control>
        </Form.Group>
        <div className="form-group">
          <Button type="submit" className="btn btnpos">
            Save
          </Button>
          {submitMessage}
          <Button onClick={(e: any) => handleClick(e)} className="btn color">
            Delete floor
          </Button>
        </div>
      </Form>
    </div>
  );
}
export default AddFloor;
