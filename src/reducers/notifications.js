import {
    FETCH_NOTIFICATIONS, FETCH_NOTIFICATIONS_FAILED, FETCH_NOTIFICATIONS_REQUEST, READ_NOTIFICATION,
    REMOVE_NOTIFICATION
} from "../constants";

const initialState = {
    isFetching: false,
    unreadId: [],
    allItems: [],
};

export function notifications(state = initialState, action) {
    switch (action.type) {
        case READ_NOTIFICATION:
            return Object.assign({}, state, {
                unreadId: state.unreadId.filter(x => {return x !== action.payload.id})
            });
        case FETCH_NOTIFICATIONS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_NOTIFICATIONS:
            return Object.assign({}, state, {
                isFetching: false,
                allItems: action.payload.allItems,
                unreadId: action.payload.unreadId
            });
        case FETCH_NOTIFICATIONS_FAILED:
            return Object.assign({}, state, {
                isFetching: false
            });
        default: return state;
    }
}