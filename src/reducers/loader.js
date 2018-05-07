import {LOADING_DONE, LOADING_STARTED} from "../constants";

const initialState = {
    isLoading: false
};

export function loader(state = initialState, action) {
    switch (action.type) {
        case LOADING_STARTED:
            return Object.assign({}, state, {
                isLoading: true
            });
        case LOADING_DONE:
            return Object.assign({}, state, {
                isLoading: false
            });
        default: return state;
    }
}