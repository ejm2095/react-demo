import * as types from '../actions/types';

const initialState = {
    running:false,
    time:[0,0,0]
}

export default (state=initialState, action) => {
    const appendToTime = (timeArr, value) => {
        const incTimeArr = (value, index=0) => {
            const newTime = timeArr[index]*10 + value;
            let hundreds = Math.floor(newTime / 100);
            timeArr[index] = newTime % 100;
            if (hundreds) {
                incTimeArr(hundreds, index + 1);
            }
        };
        incTimeArr(value);
        return timeArr;
    };


    if (action.type === types.RUN) {
        return {...state, running: true};
    } else if (action.type === types.STOP) {
        return {...state, running: false};
    } else if ( action.type === types.ADD_TIME) {
        return {...state, time: appendToTime(state.time, action.value)};
    } else if(action.type === types.IS_RUNING) {
        return {...state};
    }
    return state;
};
