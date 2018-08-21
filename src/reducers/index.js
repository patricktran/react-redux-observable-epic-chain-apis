import types from '../types'

//init state
const initialPingState = false;

const ping = (state = initialPingState, action) => {
    switch (action.type) {
        case types.PING:
            return true;

        case types.PONG:
            return false;

        case types.UNKNOWN: {
            console.log("unknown");
            return false;
        }
        default:
            return state;
    }
};

export default ping;
