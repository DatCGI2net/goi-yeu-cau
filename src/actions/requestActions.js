import  * as types from '../constants/actionTypes';

// selected request
export const selectedRequestAction = (request) => (
{
    type: types.SELECTED_REQUEST,
    request
}
    
);

// all requests
export const fetchAllRequestsAction = (payload) => (
    {
        type: types.FETCH_ALL_REQUESTS,
        payload
    }
    
);

export const addRequestAction = (message, token) => (
    {
        type: types.ADD_REQUEST,
        message,
        token
    }
    
);