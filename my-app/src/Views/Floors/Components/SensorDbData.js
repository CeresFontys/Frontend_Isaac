import 'bootstrap/dist/css/bootstrap.min.css';
import { useAxiosGet } from '../../../Hooks/HttpRequest'
import {useDispatch, useSelector} from 'react-redux';
import {update} from '../../../actions'

export function GetSensorDbData() {
   // const { floor } = useParams()
    const dispatch = useDispatch();
    const sensorsStoreData = useSelector(state => state.sensors);
    const url = `http://localhost:5002/api/sensor/sensors`
    
    let sensors = useAxiosGet(url);

    if (sensors.data && sensorsStoreData == null) {
        let sensorData = sensors.data;
        sensorData.forEach(element => {
            element.temperature = "?";
            element.humidity = "?";
        });
        dispatch(update(sensorData));       
    }
}
