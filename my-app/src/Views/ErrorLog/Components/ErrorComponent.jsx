import React, {Component, useState} from 'react';
import {useAxiosGet} from "../../../Hooks/HttpRequest";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import moment from "moment";
import SetErrorType from "./GetErrorsComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faFlag, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import ICON from '../../../Media/icons/77.png'



const ErrorComponent = (props) => {

    let url =  "http://localhost:5004/api/anomaly/errors"

    let repos = useAxiosGet(url)

    const [open, setOpen] = useState(false);



    if (!repos.data) return <p>No repos, sorry</p>;





    let content = repos.data.map((repo) => {
            console.log(repo)
            let stringType = SetErrorType.convertType(repo.type)

        if(repo.type == 4){
            return (

                <Accordion>
                    <Card>
                        <Card.Header>
                            <img src={ICON}/>
                            <div>{moment(repo.dateTime).format('MM-DD-YYYY, hh:mm ')}</div>
                            <h2>Sensor error:</h2>
                            <FontAwesomeIcon icon={faFlag}/>
                            <div>{stringType}</div>
                            <Accordion.Toggle className="btn btn-secondary" eventKey="0">
                                details
                            </Accordion.Toggle>
                            <FontAwesomeIcon icon={faTrashAlt}/>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <dl>
                                    <dt>Floor</dt>
                                    <dd>- black hot drink</dd>
                                    <dt>X</dt>
                                    <dd>- white cold drink</dd>
                                </dl>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            );
        }else {
            return (

                <Accordion>
                    <Card>
                        <Card.Header>
                            <img src={ICON}/>
                            <div>{moment(repo.dateTime).format('MM-DD-YYYY, hh:mm ')}</div>
                            <h2>Sensor error:</h2>
                            <FontAwesomeIcon icon={faFlag}/>
                            <div>{stringType + " " + repo.valueType}</div>
                            <Accordion.Toggle className="btn btn-secondary" eventKey="0">
                                details
                            </Accordion.Toggle>
                            <FontAwesomeIcon icon={faTrashAlt}/>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div className="row">
                                    <p>Id: &nbsp;&nbsp;</p>
                                    <p>{repo.id}</p>
                                    <br/>
                                    <p>{repo.error}</p>
                                    <div className="col-6">
                                        <div className="row">
                                            <p>Api value: &nbsp;&nbsp;</p>
                                            <h3>{repo.apiValue}</h3>
                                        </div>
                                        <div className="row">
                                            <p>Sensor value: &nbsp;&nbsp;</p>
                                            <h3>{repo.valueFirst}</h3>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <dl>
                                            <dt>Floor:</dt>
                                            <dd>{repo.floor.toString()}</dd>
                                            <dt>Xpos:</dt>
                                            <dd>{repo.x.toString()}</dd>
                                            <dt>Ypos:</dt>
                                            <dd>{repo.y.toString()}</dd>
                                        </dl>
                                    </div>
                                    <button className="btn-danger">Disable sensor</button>
                                </div>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            );
        }

        });


    return (
        <ul>
            <h2 className='list-head'>Sensor errors</h2>
            {content}
        </ul>
    );
};
export default ErrorComponent;