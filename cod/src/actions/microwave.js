import * as types from './types';

export function startMicrowave() {
    return {
        type: types.RUN,
    };
}

export function stopMicrowave() {
    return {
        type: types.STOP,
    };
}

export function stepTime() {
    return {
        type: types.STEP_TIME,
    };
}

export function getState() {
    return {
        type: types.GET_STATE,
    };
}

export function addTime(value) {
    return {
        type: types.ADD_TIME,
        value: value
    };
}
