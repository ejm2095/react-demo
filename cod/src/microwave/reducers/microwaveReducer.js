export default (state={running:false, time:[0,0,0]}, action) => {
    const appendToTime = (timeArr, value) => {
        const incTimeArr = (value, index=0) => {
            const newTime = timeArr[index]*10 + value;
            let hundreds = Math.floor(newTime / 100);
            timeArr[index] = newTime % 100;
            if (hundreds) {                
                incTimeArr(hundreds, index + 1);
            }
        }
        incTimeArr(value);        
        return timeArr;
    }


    if (action.type === 'RUN') {
        return {...state, running: true};        
    } else if (action.type === 'OFF') {
        return {...state, running: false};        
    } else if (action.type === 'ADD_TIME') {
        return {...state, time: appendToTime(state.time, action.value)};
    }
    return state;
}