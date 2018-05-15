const PATH = 'http://127.0.0.1:8000/api/v0';
const STATIC_PATH = 'http://127.0.0.1:8000/static';
const DEFAULT_IMG = '/img/user.png';
const LOGIN_URL = '/api_obtain_token';
export {
    PATH,
    STATIC_PATH,
    DEFAULT_IMG,
    LOGIN_URL
}

export const REFRESH_TIME = 120000; // 2 MIN

export const URLS = {
    LOGIN_URL: '/api_obtain_token',
    RESEARCH: '/examinations',
    NOTIFICATIONS: '/notifications',
    USER_DATA: '/get_user_info',
    DASHBOARD: '/dashboard',
    REFRESH_TOKEN: '/api_refresh_token',
    PROFILE: '/profile',
    SEND_EXAMINATION: '/save-examination',
    SYMPTOMS: '/symptoms'
};