import React, {Component, useState} from 'react';
import {useAxiosGet} from "../../../Hooks/HttpRequest";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import moment from "moment";
import SetErrorType from "./GetErrorsComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCoffee, faFlag, faSortDown, faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import ICON from '../../../Media/icons/77.png'
import axios from "axios";
import {getHumStatuscolor, getTempStatuscolor} from "../../../Utils/SensorHelpers";






const ErrorComponent = (props) => {

    let url =  "http://localhost:5004/api/anomaly/errors"

    let repos = useAxiosGet(url)




    function deleteError(id) {
        axios({
            method: "delete",
            url: `http://localhost:5004/api/anomaly/${id}`,
        })
            .then((res) => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error.response);
                console.log(error);

            });
    }



    const [open, setOpen] = useState(false);



    if (!repos.data) return <p>No repos, sorry</p>;





    let content = repos.data.map((repo) => {
            console.log(repo)
            let stringType = SetErrorType.convertType(repo.type)

        if(repo.type == 4){
            return (

                <Accordion className="error-accordion">
                    <Card className="card-border">
                        <Card.Header>
                            <div className="row">
                                <div className="col-1 error-self-align">
                                    <img className="error-icon-sensor" src={ICON}/>
                                </div>
                                <div className="col-4 error-self-align">
                                    <div className="error-time">{moment(repo.dateTime).format('MM-DD-YYYY, hh:mm ')}</div>
                                    <h4 className="error-tag">Sensor error:</h4>
                                </div>
                                <div className="col-4 error-self-align">
                                    <div className="error-type"> <FontAwesomeIcon className="error-flag-icon" icon={faFlag}/> {stringType + " " + repo.valueType}</div>
                                </div>
                                <div className="col-2 error-self-align">
                                    <Accordion.Toggle className="error-toggle" eventKey="0">
                                        Details
                                    </Accordion.Toggle>
                                </div>
                                <div className="col-1 error-self-align">
                                    <p onClick={() => deleteError(repo.id)} className="delete-auto">
                                        <FontAwesomeIcon className="delete-icon-error" icon={faTrashAlt}/>
                                    </p>
                                </div>

                            </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="card-style">
                                <div className="row row-padding">
                                        <p className="font-15 font-weight-bold">Id: &nbsp;&nbsp;</p>
                                        <p className="font-15">{repo.id}</p>
                                        <br/>
                                        <p className="font-15">{repo.error}</p>
                                        <div className="col-6">
                                        <div className="row">
                                            <p className="auto-margin">Api value: &nbsp;&nbsp;</p>
                                            <h3 className={repo.valueType == "Temperature" ? getTempStatuscolor(repo.apiValue) : getHumStatuscolor(repo.apiValue)}>{repo.apiValue}{repo.valueType == "Temperature" ? "°":"%"}</h3>
                                        </div>
                                        <div className="row">
                                            <p className="auto-margin">Sensor value: &nbsp;&nbsp;</p>
                                            <h3 className={repo.valueType == "Temperature" ? getTempStatuscolor(repo.valueFirst) : getHumStatuscolor(repo.valueFirst)}>{repo.valueFirst}{repo.valueType == "Temperature" ? "°":"%"}</h3>
                                        </div>
                                        <div className="row">
                                            <p className="auto-margin">Sensor next value: &nbsp;&nbsp;</p>
                                            <h3 className={repo.valueType == "Temperature" ? getTempStatuscolor(repo.valueSecond) : getHumStatuscolor(repo.valueSecond)}>{repo.valueSecond}{repo.valueType == "Temperature" ? "°":"%"}</h3>
                                        </div>
                                    </div>
                                        <div className="col-6">
                                            <dl className="dl-font">
                                                <div className="row">
                                                    <dt>Floor: &nbsp;</dt>
                                                    <dd>{repo.floor.toString()}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt>Xpos: &nbsp;</dt>
                                                    <dd>{repo.x.toString()}</dd>
                                                </div>
                                                <div className="row">
                                                    <dt>Ypos: &nbsp;</dt>
                                                    <dd>{repo.y.toString()}</dd>
                                                </div>
                                            </dl>
                                        </div>
                                    <div className="row">
                                        <div className="left-25">
                                            <p className="dl-font ">Sensor next time: &nbsp;&nbsp; {moment(repo.dateTimeNext).format('MM-DD-YYYY, hh:mm ')}</p>
                                        </div>
                                     </div>
                                </div>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            );
        }else {
            return (

                <Accordion className="error-accordion">
                    <Card className="card-border">
                        <Card.Header>
                            <div className="row">
                                <div className="col-1 error-self-align">
                                    <img className="error-icon-sensor" src={ICON}/>
                                </div>
                                <div className="col-4 error-self-align">
                                    <div className="error-time">{moment(repo.dateTime).format('MM-DD-YYYY, hh:mm ')}</div>
                                    <h4 className="error-tag">Sensor error:</h4>
                                </div>
                                <div className="col-4 error-self-align">
                                        <div className="error-type"> <FontAwesomeIcon className="error-flag-icon" icon={faFlag}/> {stringType + " " + repo.valueType}</div>
                                </div>
                                <div className="col-2 error-self-align">
                                    <Accordion.Toggle className="error-toggle" eventKey="0">
                                        Details
                                    </Accordion.Toggle>
                                </div>
                                <div className="col-1 error-self-align">
                                    <p onClick={() => deleteError(repo.id)} className="delete-auto">
                                        <FontAwesomeIcon className="delete-icon-error" icon={faTrashAlt}/>
                                    </p>
                                </div>

                            </div>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="card-style">
                                <div className="row row-padding">
                                    <p className="font-15 font-weight-bold">Id: &nbsp;&nbsp;</p>
                                    <p className="font-15">{repo.id}</p>
                                    <br/>
                                    <p className="font-15">{repo.error}</p>
                                    <div className="col-6">
                                        <div className="row">
                                            <p className="auto-margin">Api value: &nbsp;&nbsp;</p>
                                            <h3 className={repo.valueType == "Temperature" ? getTempStatuscolor(repo.apiValue) : getHumStatuscolor(repo.apiValue)}>{repo.apiValue}{repo.valueType == "Temperature" ? "°":"%"}</h3>
                                        </div>
                                        <div className="row">
                                            <p className="auto-margin">Sensor value: &nbsp;&nbsp;</p>
                                            <h3 className={repo.valueType == "Temperature" ? getTempStatuscolor(repo.valueFirst) : getHumStatuscolor(repo.valueFirst)}>{repo.valueFirst}{repo.valueType == "Temperature" ? "°":"%"}</h3>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <dl className="dl-font">
                                            <div className="row">
                                                <dt>Floor: &nbsp;</dt>
                                                <dd>{repo.floor.toString()}</dd>
                                            </div>
                                            <div className="row">
                                                <dt>Xpos: &nbsp;</dt>
                                                <dd>{repo.x.toString()}</dd>
                                            </div>
                                            <div className="row">
                                                <dt>Ypos: &nbsp;</dt>
                                                <dd>{repo.y.toString()}</dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>

                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            );
        }

        });


    return (
        <ul className="error-ul">
            {content}
        </ul>
    );
};
export default ErrorComponent;