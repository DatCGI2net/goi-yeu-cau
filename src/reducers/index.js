import { combineReducers } from 'redux';

import requests from './requestReducers';
import login from './loginReducers';
import signup from './signupReducers';
import addrequest from './addRequestReducers';
// commbine

const rootReducer = combineReducers({
    requests,
    auth: login,
    addrequest: addrequest,
});

export default rootReducer;
