import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_REQUEST,
    LOGOUT_USER,
    FETCH_PROTECTED_DATA_REQUEST,
    RECEIVE_PROTECTED_DATA,
    CONNECTING_SERVER_ERROR, FETCH_NOTIFICATIONS, READ_NOTIFICATION, LAST_RESEARCH_FETCH, LAST_RESEARCH_REQUEST,
    LAST_RESEARCH_FAILED, FETCH_NOTIFICATIONS_FAILED, LOADING_STARTED, LOADING_DONE, REFRESH_TOKEN_REQUEST,
    REFRESH_TOKEN, REFRESH_TOKEN_FAILED, PROFILE_SAVE_REQUEST, PROFILE_UPDATED, PROFILE_UPDATE_FAILED, OBTAIN_USER_INFO,
} from '../constants'

export function loadingStarted() {
    return {
        type: LOADING_STARTED
    }
}

export function loadingDone() {
    return {
        type: LOADING_DONE
    }
}

export function loginUserSuccess(token) {
    localStorage.setItem("token", token);
    return {
        type: LOGIN_USER_SUCCESS,
        payload: {
            token: token,
        }
    }
}

export function loginUserFailed(error) {
    localStorage.removeItem('token');
    return {
        type: LOGIN_USER_FAILURE,
        payload: {
            status: error.status,
            statusText: error.statusText
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
    localStorage.removeItem('fullName');
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

export function serverError(text) {
    return {
        type: CONNECTING_SERVER_ERROR,
        payload: {
            statusText: text
        }
    }
}

export function fetchNotificationsFailed(err) {
    return {
        type: FETCH_NOTIFICATIONS_FAILED,
        payload: {
            statusText: err
        }
    }
}

export function fetchNotificationRequest() {
    return {
        type: FETCH_PROTECTED_DATA_REQUEST
    }
}

export function readNotification(id) {
    return {
        type: READ_NOTIFICATION,
        payload: {
            id: id
        }
    }
}

export function fetchNotifications(data, unread) {
    return {
        type: FETCH_NOTIFICATIONS,
        payload: {
            allItems: data,
            unreadId: unread
        }
    }
}

export function fetchLastResearch(data) {
    return {
        type: LAST_RESEARCH_FETCH,
        payload: {
            data: data
        }
    }
}

export function fetchLastResearchRequest() {
    return {
        type: LAST_RESEARCH_REQUEST
    }
}

export function fetchLastResearchFailed(err) {
    return {
        type: LAST_RESEARCH_FAILED,
        payload: {
            error: err
        }
    }
}

export function refreshTokenRequest() {
    return {
        type: REFRESH_TOKEN_REQUEST
    }
}

export function refreshToken(token) {
    localStorage.setItem('token', token);
    return {
        type: REFRESH_TOKEN,
        payload: {
            token: token
        }
    }
}

export function refreshTokenFailed(err) {
    localStorage.removeItem('token');
    return {
        type: REFRESH_TOKEN_FAILED,
        payload: {
            status: err.status,
            statusText: err.statusText
        }
    }
}

export function profileSaveRequest() {
    return {
        type: PROFILE_SAVE_REQUEST
    }
}

export function profileUpdated(new_cred) {
    return {
        type: PROFILE_UPDATED,
        payload: {
            first_name: new_cred.first_name,
            last_name: new_cred.last_name
        }
    }
}

export function profileUpdateFailed(err) {
    return {
        type: PROFILE_UPDATE_FAILED,
        payload: {
            status: err.status,
            statusText: err.statusText
        }
    }
}

export function obtainUserInfo(info) {
    localStorage.setItem('info', JSON.stringify(info));
    return {
        type: OBTAIN_USER_INFO,
        payload: {
            firstName: info.first_name,
            lastName: info.last_name
        }
    }
}
{

}