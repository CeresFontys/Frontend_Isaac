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

export const addIp = (data) => {
    return {
        type: "ADDIP",
        payload: data,
    };
};
export const removeIp = (data) => {
    return {
        type: "REMOVEIP",
        payload: data,
    };
};
export const addUser = (data) => {
    return {
        type: "ADDUSER",
        payload: data,
    };
};
export const removeUser = (data) => {
    return {
        type: "REMOVEUSER",
        payload: data,
    };
};
