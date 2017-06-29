import * as actionTypes from '../actionTypes';

export const events = (
    state = {

    },
    action
) => {
    switch(action.type) {
        case actionTypes.STORE_EVENTS:
            return {
                ...action.events
            };
        default:
            return state;
    }
};