const sensorDataReducer = (state =null, action) =>{
    switch(action.type){
        case "SETSENSORS":
            return state = action.payload;
        case "UPDATESENSORS":
            if(state !== null){
               return state.map((item, index) => {
                // Find the item with the matching id
                if(item.id === action.payload.id) {
                  // Return a new object
                    item.groupId = action.payload.groupId; // replace the uiIndex 
                  }
                   return item
                });
            }else{
                return state;
            }
            
        default:
            return state;
    }
}
export default sensorDataReducer;