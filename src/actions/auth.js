import axios from 'axios';
import { returnErrors } from './errors'

import { ROOT_URL } from '../config';
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGOUT_SUCCESS,
    AUTHENTICATE_USER
} from './types';

//Check token & load user
export const loadUser = () => (dispatch) => {
    dispatch({ type: USER_LOADING });
    const token = localStorage.getItem('token')
    const config = {
        headers: {
            "Content-type": "application/json"
        }
    }
    if (token) {
        config.headers['x-auth-token'] = token;
    }
    axios.get(`${ROOT_URL}/api/auth/user`, config)
        .then(response => dispatch({
            type: USER_LOADED,
            payload: response.data
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