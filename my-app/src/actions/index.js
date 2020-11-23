export const update = (data) =>{
    return{
        type: 'UPDATE',
        payload: data
    };
}

export const addSensor = (data) =>{
    return{
        type: 'ADDSENSOR',
        payload: data
    };
}

export const setGroups = (data) =>{
    return{
        type: 'SETGROUPS',
        payload: data
    };
}