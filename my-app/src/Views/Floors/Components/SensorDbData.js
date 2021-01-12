import { useAxiosGet } from '../../../Hooks/HttpRequest'
import {useDispatch, useSelector} from 'react-redux';
import {setGroups, setSensors} from '../../../actions'

export function GetSensorDbData() {
     
    const dispatch = useDispatch();
    const sensorsStoreData = useSelector(state => state.sensors);
    const groupsStoreData = useSelector(state => state.groups);
    const urlSensors = `http://localhost:5002/api/sensor`;
    const urlGroups = `http://localhost:5002/api/group`
   
    const sensors = useAxiosGet(urlSensors);
    const groups = useAxiosGet(urlGroups);

    console.log(sensors)
    if (sensors.data && sensorsStoreData == null) {
        let sensorData = sensors.data;
        sensorData.forEach(element => {
            element.temperature = "?";
            element.humidity = "?";
        });
        dispatch(setSensors(sensorData));       
    }
    if (groups.data && groupsStoreData == null) {
        dispatch(setGroups(groups.data)); 
        console.log(groupsStoreData);      
    }
}
