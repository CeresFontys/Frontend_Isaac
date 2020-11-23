import 'bootstrap/dist/css/bootstrap.min.css';
import { useAxiosGet } from '../../../Hooks/HttpRequest'
import {useDispatch, useSelector} from 'react-redux';
import {setGroups, update} from '../../../actions'

export function GetSensorDbData() {
    const dispatch = useDispatch();
    const sensorsStoreData = useSelector(state => state.sensors);
    const groupsStoreData = useSelector(state => state.groups);
    const urlSensors = `http://localhost:5002/api/sensor/sensors`;
    const urlGroups = `http://localhost:5002/api/group/groups`
    
    const sensors = useAxiosGet(urlSensors);
    const groups = useAxiosGet(urlGroups);

    if (sensors.data && sensorsStoreData == null) {
        let sensorData = sensors.data;
        sensorData.forEach(element => {
            element.temperature = "?";
            element.humidity = "?";
        });
        dispatch(update(sensorData));       
    }
    if (groups.data && groupsStoreData == null) {
        dispatch(setGroups(groups.data)); 
        console.log(groupsStoreData);      
    }
}
