import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGOUT_USER, CONNECTING_SERVER_ERROR, REFRESH_TOKEN_REQUEST, REFRESH_TOKEN, REFRESH_TOKEN_FAILED,
} from '../constants'
import {parseJwt} from "../utils/utils";

const initialState = {
    token: null,
    userName: null,
    isAuthenticated: false,
    authInProgress: false,
    statusText: null,
    status: null,
    avatar: null,
    exp: 0,
    userId: null,
    fullName: null,
    isChief: false
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
               userId: null,
               statusText: action.payload.statusText,
               status: action.payload.status
            });
        case LOGIN_USER_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: true,
                authInProgress: false,
                userName: parseJwt(action.payload.token).username,
                exp: parseJwt(action.payload.token).exp,
                userId: parseJwt(action.payload.token).user_id,
                isChief: action.payload.user.is_chief,
                fullName: action.payload.user.first_name + " " + action.payload.user.last_name,
                token: action.payload.token,
                statusText: 'You were successfully authenticated'
            });
        case LOGOUT_USER:
            return Object.assign({}, state, {
                isAuthenticated: false,
                token: null,
                isChief: false,
                fullName: null,
                exp: 0,
                userId: null,
                userName: null,
                statusText: 'You have been logged out'
            });
        case CONNECTING_SERVER_ERROR:
            return Object.assign({}, state, {
                statusText: action.payload.statusText,
                status: action.payload.status
            });
        case REFRESH_TOKEN_REQUEST:
            return state;
        case REFRESH_TOKEN:
            return Object.assign({}, state, {
                token: action.payload.token,
                exp: parseJwt(action.payload.token).exp,
            });
        case REFRESH_TOKEN_FAILED:
            return Object.assign({} ,state, {
                isAuthenticated: false,
                authInProgress: false,
                token: null,
                exp: 0,
                userId: null,
                userName: null,
                statusText: action.payload.status + ": " + action.payload.statusText,
                status: action.payload.status
            });
        default: return state;
    }
}