import * as actionTypes from '../actionTypes';

export const getEvents = (dispatch, value) => {
    return new Promise((resolve, reject) => {
        return fetch('https://www.eventbriteapi.com/v3/events/search/?token=VBUSKKCQ2VTXKPOP34PX').then(response => {

                resolve(response.json())

        }, error => {
            reject(new Error(error.message))
        })
    }).then(response => dispatch({type: actionTypes.STORE_EVENTS, events: response}))
}