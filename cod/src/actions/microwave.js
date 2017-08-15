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

export function addTime(values) {
  return {
    type: types.ADD_TIME,
  };
}
