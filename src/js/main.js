import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Provider } from 'react-redux';

import Routes from './routes';
import { store } from './createStore';

const history = syncHistoryWithStore(hashHistory, store);

render(

    <Provider store={ store }>
        <Router history={ history }>
            { Routes() }
        </Router>
    </Provider>,
    document.getElementById('root')
);