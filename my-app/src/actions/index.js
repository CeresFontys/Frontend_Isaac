export const setSensors = (data) => {
  return {
    type: "SETSENSORS",
    payload: data,
  };
};

export const updateSensorGroup = (data) => {
  return {
    type: "UPDATESENSORS",
    payload: data,
  };
};

export const setGroups = (data) => {
  return {
    type: "SETGROUPS",
    payload: data,
  };
};

export const SetFloor = (data) => {
  return {
    type: "SETFLOOR",
    payload: data,
  };
};
