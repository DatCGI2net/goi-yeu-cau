
import { put, call, all } from 'redux-saga/effects';
import { fetchAllRequests, postRequest } from '../Api/request';

import * as types from '../constants/actionTypes';

//saga

export function* fetchRequestSaga({payload}) {
    try {
        console.log('fetchRequestSaga call api:', payload);
        const requests = yield call(fetchAllRequests, payload);
        console.log('requests in saga:',  requests);

        yield all([
            put({ type: types.FETCH_REQUESTS_SUCCESS, requests}),
            put({ type: types.SELECTED_REQUEST, request: requests[0]})
        ]);
    } catch (error) {
        yield put({ type: types.FETCH_REQUESTS_FAILURE, error});
    }

}

// add request
export function* addRequestSaga({message, token}) {
    try {
        console.log('add Request call api:', message, token);
        const add_res = yield call(postRequest, message, token);
        console.log('added request in saga:',  add_res);

        if (add_res.detail){
            yield put({ type: types.ADD_REQUEST_FAILURE, payload: add_res.detail});
        }else if (add_res.id) {
            yield  put({ type: types.ADD_REQUEST_SUCCESS, payload: add_res.id});
                
        }else{
            let errors = [];
            for (const k in add_res)
                errors.push(add_res[k].join(', '))
            const error = errors.join(', ')
            yield put({ type: types.ADD_REQUEST_FAILURE, payload: error});
        }
    } catch (error) {
        yield put({ type: types.ADD_REQUEST_FAILURE, error});
    }

}
