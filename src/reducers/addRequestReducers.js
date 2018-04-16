import initialState from './initialState';
import * as types from '../constants/actionTypes';

//handle
export default function (state = initialState.addrequest, {type, payload}) {
    switch (type) {
        case types.ADD_REQUEST_SUCCESS:
            console.log('login success:',type, payload);
            return {...state, requestId: payload};
        case types.ADD_REQUEST_FAILURE:
            console.log('login error:', payload);
            return {...state, error: payload};

        default:
            return state;

    }
}