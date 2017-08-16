import * as types from '../actions/types';

const initialState = {
    running:false,
    time:[0,0,0]
};

export default (state=initialState, action) => {
    //TODO: make this work for 100+
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

    const decreaseTime = (timeArr) => {
        //chould be recursive but meh its late and I don't want to think :-P
        if (Math.max(...timeArr)) {
            if ( timeArr[0] < 1 ) {
                if ( timeArr[1] < 1 ) {
                    timeArr[2]--;
                    timeArr[1] += 60;
                }
                timeArr[1]--;
                timeArr[0] += 60;
            }
            timeArr[0]--;
        }
        return timeArr;
    };

    if (action.type === types.RUN) {
        return {...state, running: true};
    } else if (action.type === types.STOP) {
        if (state.running)
            return {...state, running: false };
        return {...state, time: [0,0,0]};
    } else if (action.type === types.ADD_TIME) {
        if (state.running)
            return;
        return {...state, time: appendToTime(state.time, action.value)};
    } else if (action.type === types.STEP_TIME) {
        if (state.running) {
            let newTime = decreaseTime(state.time);
            if (Math.max(...newTime))
                return {...state, time: newTime};
        }
        return {...state, running: false };
    } else if(action.type === types.IS_RUNING) {
        return {...state};
    }
    return state;
};
