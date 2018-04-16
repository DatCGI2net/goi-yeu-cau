import React from 'react';
import ReactDom from 'react-dom';
import {Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import routes from './routes'


//initialize store
const store = configureStore();

ReactDom.render(
    <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('root')
);
