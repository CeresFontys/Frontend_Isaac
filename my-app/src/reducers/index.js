import sensorDataReducer, {SelectedSensorReducer} from "./SensorDataReducer";
import { combineReducers } from "redux";
import sensorGroupReducer from "./SensorGroupReducer";
import FloorReducers from "./FloorReducers";

const allReducers = combineReducers({
  sensors: sensorDataReducer,
  selectedSensor: SelectedSensorReducer,
  groups: sensorGroupReducer,
  floors: FloorReducers,
});

export default allReducers;
