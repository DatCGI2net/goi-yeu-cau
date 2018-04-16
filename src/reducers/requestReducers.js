import initialState from './initialState';
import * as types from '../constants/actionTypes';

//handle
export default function (state = initialState.requests, action) {
    switch (action.type) {
        case types.FETCH_REQUESTS_SUCCESS:
            console.log('reduce requests:', action.requests);
            return [...state, action.requests];
        case types.SELECTED_REQUEST:
            return {...state, selectedRequest: action.request};

        default:
            return state;

    }
}