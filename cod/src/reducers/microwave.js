import * as types from '../actions/types';

const initialState = {
    running:false,
    time:[]
};

export default (state=initialState, action) => {
    //TODO: make this work for 100+
    const appendToTime = (timeArr, value) => {
        if (timeArr.length < 6) {
            timeArr.unshift(value);
        }
        return timeArr;
    };

    const decreaseTime = (timeArr) => {
        const stepTime = (timeArr, i) => {
            if (!timeArr[i]) {
                timeArr[i] = 10-(4*(i%2)); //fancy math for either 10 or 6
                stepTime(timeArr, i+1);
            }
            timeArr[i]--;
        };
        if(Math.max(...timeArr))
            stepTime(timeArr, 0);
        return timeArr;
    };

    switch (action.type){

    case types.RUN:
        if (Math.max(...state.time))
            return {...state, running: true};
        return {...state};

    case types.STOP:
        if (state.running)
            return {...state, running: false};
        return {...state, time: []};

    case types.ADD_TIME:
        if (state.running)
            return {...state};
        return {...state, time: [...appendToTime(state.time, action.value)]};

    case types.STEP_TIME:
        if (state.running) {
            let newTime = decreaseTime(state.time);
            if (Math.max(...newTime)){
                return {...state, time: [...newTime]};
            }
            return {...state, running: false, time: []};
        }
        return {...state};

    case types.GET_STATE:
        return {...state};

    default:
        return state;
    }
};
