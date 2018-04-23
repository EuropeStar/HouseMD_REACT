import jwtDecode from 'jwt-decode';
import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGOUT_USER,
} from '../constants'

const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    authInProgress: false,
    statusText: null
};

export function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return Object.assign({}, state, {
                authInProgress: true,
                statusText: null
            });
        case LOGIN_USER_FAILURE:
            return Object.assign({}, state, {
               authInProgress: false,
               isAuthenticated: false,
               userName: null,
               token: null,
               statusText: "Error " + action.payload.status + ": " + action.payload.statusText
            });
        case LOGIN_USER_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: true,
                authInProgress: false,
                token: action.payload.token,
                statusText: 'You were successfully authenticated'
            });
        case LOGOUT_USER:
            return Object.assign({}, state, {
                isAuthenticated: false,
                token: null,
                userName: null,
                statusText: 'You have been logged out'
            });
        default: return state;
    }
}