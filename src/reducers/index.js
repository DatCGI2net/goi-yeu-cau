import { combineReducers } from 'redux';

import requests from './requestReducers';
import login from './loginReducers';
import addrequest from './addRequestReducers';
// commbine

const rootReducer = combineReducers({
    requests,
    auth: login,
    addrequest: addrequest,
});

export default rootReducer;
