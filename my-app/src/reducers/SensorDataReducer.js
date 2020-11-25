const sensorDataReducer = (action, state = null) => {
  switch (action.type) {
    case "UPDATE":
      return (state = action.payload);
    case "ADDSENSOR":
      return {
        ...state,
        arr: [...state.arr, action.payload],
      };
    default:
      return state;
  }
};
export default sensorDataReducer;
