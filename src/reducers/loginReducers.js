import initialState from './initialState';
import * as types from '../constants/actionTypes';

//handle
export default function (state = initialState.auth, {type, payload}) {
    switch (type) {
        case types.LOGIN_REQUEST_SUCCESS:
        case types.LOGOUT_REQUEST_SUCCESS:
            //console.log('login success:', type, payload);
            return {...state, token: payload};
        case types.LOGIN_REQUEST_FAILURE:
        case types.LOGOUT_REQUEST_FAILURE:
            //console.log('login error:', payload);
            return {...state, error: payload};

        default:
            return state;

    }
}