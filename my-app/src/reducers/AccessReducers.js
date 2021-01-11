import {StartData} from "../Views/AccessControl/Models/StartData";


const AccessReducers = (state = {users: new StartData().users, ips: new StartData().whitelists}, action) => {
    switch (action.type) {
        case "ADDUSER":
            return (state.users.push(action.payload));
        case "REMOVEUSER":
            return (state.users.splice(state.users.indexOf(action.payload)));
        case "ADDIP":
            return (state.ips.push(action.payload));
        case "REMOVEIP":
            return (state.users.splice(state.users.indexOf(action.payload)));
        default:
            return state;
    }
};
export default AccessReducers;
