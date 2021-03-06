import * as types from '../constants/actionTypes';

// selected request
export const loginAction = (email, password) => (
{
    type: types.LOGIN_REQUEST,
    email, password
});

export const logoutAction = (payload) => (
{
    type: types.LOGOUT_REQUEST,
    payload
});


export const signupAction = (payload) => (
    {
        type: types.SIGNUP_REQUEST,
        payload
    });
