import initialState from './initialState';
import * as types from '../constants/actionTypes';

//handle
export default function (state = initialState.addrequest, {type, payload}) {
    switch (type) {
        case types.ADD_REQUEST_SUCCESS:
            console.log('login success:',type, payload);
            return {...state, Id: payload, error: null};
        case types.ADD_REQUEST_FAILURE:
            console.log('login error:', payload);
            return {...state, error: payload, Id: null};

        default:
            return state;

    }
}