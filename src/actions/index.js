export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = "CLEAR_DISPLAY";

export const MEMORY_SAVE = "MEMORY_SAVE";

export const MEMORY_REQ = "MEMORY_REQ";

export const MEMORY_CLEAR = "MEMORY_CLEAR"

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const updateOperator = (operator) => {
    return({type:CHANGE_OPERATION, payload: operator});
}

export const clearTotal = () => {
    return({type:CLEAR_DISPLAY});
}

export const saveMemory = () => {
    return({type:MEMORY_SAVE});
}

export const requestMemory = () => {
    return({type: MEMORY_REQ})
}

export const clearMemory = () => {
    return({type: MEMORY_CLEAR});
}
