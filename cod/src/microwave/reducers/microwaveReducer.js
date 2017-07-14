export default (state={running:false, time:0}, action) => {
    if (action.type === 'RUN') {
        debugger;
        state.running = true;        
    } else if (action.type === 'OFF') {
        state.running = false;
    } else if (action.type === 'TIME') {
        state.time = action.value
    }
    return state;
}