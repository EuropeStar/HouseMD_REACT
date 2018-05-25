import {LAST_RESEARCH_FAILED, LAST_RESEARCH_FETCH, LAST_RESEARCH_REQUEST} from "../constants";

const initialState = {
    isFetching: true,
    data: [],
    success: true
};

export function research(state = initialState, action) {
    switch (action.type) {
        case LAST_RESEARCH_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                success: false
            });
        case LAST_RESEARCH_FETCH:
            return Object.assign({}, state, {
                data: action.payload.data,
                isFetching: false,
                success: true
            });
        case LAST_RESEARCH_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        default: return state;
    }
}