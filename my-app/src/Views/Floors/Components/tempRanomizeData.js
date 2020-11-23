import 'bootstrap/dist/css/bootstrap.min.css';
import {useDispatch, useSelector} from 'react-redux';
import {setGroups, update} from '../../../actions'

export function RandomizeData() {
   // const { floor } = useParams()
    const dispatch = useDispatch();
    const sensorsStoreData = useSelector(state => state.sensors);

    if (sensorsStoreData) {
        sensorsStoreData.forEach(element => {
            element.temperature = Math.floor(Math.random() * 16) + 14  ;
            element.humidity = Math.floor(Math.random() * 30) + 25  ;
        });    
    }
}
