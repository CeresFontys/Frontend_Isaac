const FloorReducers = (action, state = null) => {
  switch (action.type) {
    case "SETFLOOR":
      return (state = action.payload);
    default:
      return state;
  }
};
export default FloorReducers;
