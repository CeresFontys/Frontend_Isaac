import sensorDataReducer from './SensorDataReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    sensors: sensorDataReducer
})

export default allReducers;