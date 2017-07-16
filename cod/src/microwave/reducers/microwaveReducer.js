export default (state={running:false, time:0}, action) => {
    if (action.type === 'RUN') {
        return {...state, running: true};        
    } else if (action.type === 'OFF') {
        return {...state, running: false};        
    } else if (action.type === 'TIME') {
        if (state.time < 100000) {
            let newTime = state.time*10 + action.value;
            return {...state, time: newTime};
        }
        return {...state}
    }
    return state;
}