import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import HomePage from './components/HomePage';
import LoginPage from './containers/LoginPage';
import RequestPage from './containers/RequestPage';
import AddRequestPage from './containers/AddRequestPage';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/requests" component={RequestPage} />
        <Route path="/addrequest" component={AddRequestPage} />
    </Route>
);

