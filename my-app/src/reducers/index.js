import sensorDataReducer from './SensorDataReducer';
import {combineReducers} from 'redux';
import sensorGroupReducer from './SensorGroupReducer';

const allReducers = combineReducers({
    sensors: sensorDataReducer,
    groups: sensorGroupReducer
})

export default allReducers;