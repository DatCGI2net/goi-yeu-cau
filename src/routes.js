import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import HomePage from './components/HomePage';
import LoginPage from './containers/LoginPage';
import RequestPage from './containers/RequestPage';
import AddRequestPage from './containers/AddRequestPage';

const baseUrl = process.env.PUBLIC_URL; // will be /hypercomp

export default (
    <Route path={baseUrl + "/" } component={App}>
        <IndexRoute component={HomePage} />
        <Route path={baseUrl + "/login" } component={LoginPage} />
        <Route path={baseUrl + "/requests" } component={RequestPage} />
        <Route path={baseUrl + "/addrequest" } component={AddRequestPage} />
    </Route>
);

