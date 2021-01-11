import sensorDataReducer from "./SensorDataReducer";
import { combineReducers } from "redux";
import sensorGroupReducer from "./SensorGroupReducer";
import FloorReducers from "./FloorReducers";
import AccessReducers from "./AccessReducers";

const allReducers = combineReducers({
  sensors: sensorDataReducer,
  groups: sensorGroupReducer,
  floors: FloorReducers,
  access: AccessReducers
});

export default allReducers;
