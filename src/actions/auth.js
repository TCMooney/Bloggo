import axios from 'axios';
import { returnErrors } from './errors'

import { ROOT_URL } from '../config';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    AUTHENTICATE_USER
} from './types';

//Check token & load user
export const loadUser = () => (dispatch, getState) => {
    //User loading
    dispatch({ type: USER_LOADING });
    //Get token from localstorage
    const token = getState.auth.token;
    //Headers
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    //If token, add to headers
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    axios.get(`${ROOT_URL}/api/user`, config)
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR
            });
        });
}

export function logout() {
    return {
        type: LOGOUT_SUCCESS
    };
};

export function signUp(fields, success) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/api/users`, fields)
            .then(response => {
                dispatch({
                    type: AUTHENTICATE_USER,
                    payload: response.data
                })
                success();
            })
            .catch(err => {
                if (err) { console.log(err) }
            })
    }
}

export function signIn(fields, success) {
    return function (dispatch) {
        axios.post(`${ROOT_URL}/api/auth`, fields)
            .then(response => {
                const { token } = response.data;
                localStorage.setItem('token', token);
                dispatch({
                    type: AUTHENTICATE_USER,
                    payload: response.data
                })
                success();
            })
            .catch(err => {
                if (err) { console.log(err) }
            })
    }
}