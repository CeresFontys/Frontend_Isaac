export const update = (data) => {
  return {
    type: "UPDATE",
    payload: data,
  };
};

export const SetFloor = (data) => {
  return {
    type: "SETFLOOR",
    payload: data,
  };
};

export const setGroups = (data) => {
  return {
    type: "SETGROUPS",
    payload: data,
  };
};
