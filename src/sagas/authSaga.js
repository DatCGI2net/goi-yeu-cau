import { put, call, all, race, take } from 'redux-saga/effects';
import { login, signup, logout } from '../Api/auth';

import * as types from '../constants/actionTypes';
import { browserHistory } from 'react-router';

//saga

export function* loginSaga({email, password}) {
    try {
        console.log('loginSaga call api:', email, password);
        const winner = yield race({
            loggedIn: call(login, email, password),
            timeout: take(types.LOGOUT_REQUEST)
        });
        
        if (winner.loggedIn) {
            //console.log('winner.token:', winner.token);
            const res = winner.loggedIn;
            
            if (res.token){
                const token = res.token;
                console.log('token:', token);
                yield put({ type: types.LOGIN_REQUEST_SUCCESS, payload: token});
                localStorage.setItem('token', token);
                do_rediret('/');   
            }else if (res.error) {
                // got error
                const error = res.error;
                console.log('error:', error);
                yield put({ type: types.LOGIN_REQUEST_FAILURE, payload: error});
            }
            
        }else{
            console.log('logut won');
        }
        
    } catch (error) {
        yield put({ type: types.LOGIN_REQUEST_FAILURE, payload: error});
    }

}

//saga

export function* signupSaga({payload}) {
    try {
        console.log('fetchRequestSaga call api:', payload);
        const requests = yield call(signup, payload);
        console.log('requests in saga:',  requests);

        yield all([
            put({ type: types.SIGNUP_REQUEST_SUCCESS, requests}),
        ]);
    } catch (error) {
        yield put({ type: types.SIGNUP_REQUEST_FAILURE, error});
    }

}

export function* logoutSaga({payload}) {
    try {
        console.log('logoutSaga call api:', payload);
        const winner = yield race({
            loggedOut: call(logout, payload),
            timeout: take(types.LOGIN_REQUEST)
        });
        console.log('winner:', winner);
        if (winner.loggedOut) {
            console.log('loggedOut:', winner.loggedOut);
            const res = winner.loggedOut;
            if (!res.error){
                const token = null;
                console.log('token:', res);
                yield put({ type: types.LOGOUT_REQUEST_SUCCESS, payload: token});
                localStorage.setItem('token', token);
                do_rediret('/login');   
            }else if (res.error) {
                // got error
                const error = res.error;
                console.log('error:', error);
                yield put({ type: types.LOGOUT_REQUEST_FAILURE, payload: error});
            }
            
        }
        
    } catch (error) {
        yield put({ type: types.LOGOUT_REQUEST_FAILURE, payload: error});
    }

}

function do_rediret(url) {
    browserHistory.push(url);
}