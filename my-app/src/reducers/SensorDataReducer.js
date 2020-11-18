const sensorDataReducer = (state =null, action) =>{
    switch(action.type){
        case "UPDATE":
            return state = action.payload;
        case "ADDSENSOR":
            return { 
                ...state,
                arr: [...state.arr, action.payload]
            }
        default:
            return state;
    }
}
export default sensorDataReducer;