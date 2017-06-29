import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import {events} from './reducers/events';

const rootReducer = combineReducers({
    routing: routerReducer,
    events,
});

export const store = compose(
    applyMiddleware(
        thunk,
        routerMiddleware(hashHistory)
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(rootReducer);