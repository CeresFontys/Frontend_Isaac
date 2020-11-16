import React, { Component } from "react";
import mqtt from "mqtt";
import MQTT_OPTIONS from '../../../config'

let topic = "#";

function SensorList() {

const MQTTConnect = () => {
    const client = mqtt.connect("ws://server.kurza.nl", MQTT_OPTIONS);
    client.on("connect", function() {
      // When connected
      console.log("connected");
      client.subscribe(topic, error => {
        if (error) console.error(error);
      });
    });

    client.on("message", (topic, message) => {
      console.log(topic, message.toString());
    });
};
return (
    <div>

        <button onClick={MQTTConnect}>Load mqtt</button>

    </div>
  );
}
export default SensorList;