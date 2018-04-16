import { takeLatest, all } from 'redux-saga/effects';
import { fetchRequestSaga, addRequestSaga } from './requestSaga';
import { loginSaga, signupSaga, logoutSaga } from './authSaga';


import * as types from '../constants/actionTypes';

// watch
export default function* watchAllActionSagas() {
    yield all([
        takeLatest(types.FETCH_ALL_REQUESTS, fetchRequestSaga),
        takeLatest(types.LOGIN_REQUEST, loginSaga),
        takeLatest(types.LOGOUT_REQUEST, logoutSaga),
        takeLatest(types.SIGNUP_REQUEST, signupSaga),
        takeLatest(types.ADD_REQUEST, addRequestSaga),
    ]);

}