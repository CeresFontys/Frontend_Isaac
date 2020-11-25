const sensorGroupReducer = (action, state = null) => {
  switch (action.type) {
    case "SETGROUPS":
      return (state = action.payload);
    default:
      return state;
  }
};
export default sensorGroupReducer;
