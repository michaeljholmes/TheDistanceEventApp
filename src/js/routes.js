import React from 'react';
import { Route,IndexRoute } from 'react-router';
import Home from './containers/Home';
import EventContainer from './containers/Event';
import App from './containers/App';


export default function Routes() {
    return (
        <Route path="/" component={App} >
            <IndexRoute component={Home}/>
            <Route path="/:id" component={EventContainer}/>
        </Route>
    );
}
