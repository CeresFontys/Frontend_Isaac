import React, { Component, useState } from "react";
import axios from "axios";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Floors.css";

function AddFloor(props) {
  const [id, setId] = useState();
  const [image, setImage] = useState();
  const [name, setName] = useState();
  const [width, setWidth] = useState();
  const [length, setLength] = useState();
  const [submitMessage, setSubmitMessage] = useState(<div></div>);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    var bodyFormData = new FormData();
    bodyFormData.append("Floor.Name", name);
    bodyFormData.append("Floor.Length", length);
    bodyFormData.append("Floor.Width", width);
    bodyFormData.append("File", image);
    axios({
      method: "post",
      url: "http://localhost:5006/Floor",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setSubmitMessage(<div className="succes">Succes</div>);
      })
      .catch((error) => {
        console.log(error.response);
        setSubmitMessage(
          <div className="unsuccesfull">Unsuccesfull try again later</div>
        );
      });
  };
  console.log(props.isVisible);
  return (
    <div className={props.isVisible ? "box boxOpen" : "box"}>
      <Form onSubmit={(e: any) => handleSubmit(e)}>
        <Form.Group className="filearea" controlId="formBasicImage">
          <Form.File
            required
            onChange={(e: any) => setImage(e.target.files[0])}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="name"
            placeholder="Enter name"
            onChange={(e: any) => setName(e.target.value)}
            className="textarea"
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicLength">
          <Form.Control
            type="number"
            placeholder="Enter length"
            onChange={(e: any) => setLength(e.target.value)}
            className="textarea"
            required
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicWidth">
          <Form.Control
            type="number"
            placeholder="Enter width"
            onChange={(e: any) => setWidth(e.target.value)}
            className="textarea"
            required
          ></Form.Control>
        </Form.Group>
        <div className="form-group">
          {submitMessage}
          <Button type="submit" className="btn btnpos">
            Save
          </Button>
        </div>
      </Form>
    </div>
  );
}
export default AddFloor;
