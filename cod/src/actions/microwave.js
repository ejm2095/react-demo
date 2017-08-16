import * as types from './types';

export function startMicrowave(time) {
    return {
        type: types.RUN,
    };
}

export function getRunningState() {
    return {
        type: types.IS_RUNING,
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

export function getTime() {
    return {
        type: types.GET_TIME,
    };
}

export function addTime(value) {
    return {
        type: types.ADD_TIME,
        value: value
    };
}
