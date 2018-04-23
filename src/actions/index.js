import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGOUT_USER,
    FETCH_PROTECTED_DATA_REQUEST,
    RECEIVE_PROTECTED_DATA,
    CONNECTING_SERVER_ERROR
} from '../constants'
import {push} from 'react-router-redux';
import {LOGIN_URL, PATH} from '../backend';
import jwtDecode from 'jwt-decode';

export function loginUserSuccess(token) {
    localStorage.setItem("token", token);
    return {
        type: LOGIN_USER_SUCCESS,
        payload: {
            token: token
        }
    }
}

export function loginUserFailed(error) {
    localStorage.removeItem('token');
    return {
        type: LOGIN_USER_FAILURE,
        payload: {
            status: error.response.status,
            statusText: error.response.statusText
        }
    }
}

export function loginUserRequest() {
    return {
        type: LOGIN_USER_REQUEST
    }
}

export function logout() {
    localStorage.removeItem('token');
    return {
        type: LOGOUT_USER
    }
}

export function receiveProtectedData(data) {
    return {
        type: RECEIVE_PROTECTED_DATA,
        payload: {
            data: data
        }
    }
}

export function fetchProtectedDataRequest() {
    return {
        type: FETCH_PROTECTED_DATA_REQUEST
    }
}

export function fetchProtectedData(token, url) {
    return function (dispatch, state) {
        dispatch(fetchProtectedDataRequest());
        return fetch(PATH + url, {
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(response => response.json()).then(response => {
            dispatch(receiveProtectedData(response.data));
        }).catch(error => {
            if(error.response.status === 401) {
                dispatch(loginUserFailed(error));
                dispatch(push('/login'));
            }
        })
    }
}

export function serverError(text) {
    return {
        type: CONNECTING_SERVER_ERROR,
        payload: {
            statusText: text
        }
    }
}