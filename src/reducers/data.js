import {
    FETCH_PROTECTED_DATA_REQUEST,
    RECEIVE_PROTECTED_DATA
} from '../constants'

const initialState = {
    data: null,
    isFetching: false
};

export function data(state = initialState, action) {
    switch (action.type) {
        case FETCH_PROTECTED_DATA_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_PROTECTED_DATA:
            return Object.assign({}, state, {
                data: action.payload.data,
                isFetching: false
            });
        default: return state;
    }
}