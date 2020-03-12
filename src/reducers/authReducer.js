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
} from '../actions/types';

const INITIAL_STATE = {
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        case AUTHENTICATE_USER:
            // localStorage.setItem('token', action.payload.token)
            const { user, token } = action.payload
            return {
                ...state,
                user,
                token,
                isAuthenticated: true,
                isLoading: false
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false
            }
        default: return state;
    }
}