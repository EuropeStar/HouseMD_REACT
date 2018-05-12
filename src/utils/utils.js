import {REFRESH_TIME} from "../backend";

export function parseJwt(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

export function checkTokenCloseToEXP(exp) {
    let time = exp * 1000 - new Date().getTime();
    return time < REFRESH_TIME
}

export function errorHandle(resp, dispatch, component) {
    if (resp.status === 401) {
        component.props.loginUserFailed(resp);
        throw Error(resp.statusText);
    } else if (resp.status >= 400) {
        dispatch(resp);
        throw Error(resp.statusText)
    } else {
        return resp;
    }
}