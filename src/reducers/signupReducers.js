import initialState from './initialState';
import * as types from '../constants/actionTypes';

//handle
export default function (state = initialState.auth, action) {
    switch (action.type) {
        case types.SIGNUP_REQUEST_SUCCESS:
            console.log('signup success:', action.token);
            return {...state, token: action.token};
        case types.SIGNUP_REQUEST_FAILURE:
            return {...state, error: action.error};

        default:
            return state;

    }
}