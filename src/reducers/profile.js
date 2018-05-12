import {PROFILE_SAVE_REQUEST, PROFILE_UPDATE_FAILED, PROFILE_UPDATED} from "../constants";


const initialState = {
    updating: false,
    success: false,
    statusText: null
};

export function profile(state = initialState, action) {
    switch (action.type) {
        case PROFILE_UPDATED:
            return Object.assign({}, state, {
                updating: false,
                success: true,
                statusText: 'Updated'
            });
        case PROFILE_UPDATE_FAILED:
            return Object.assign({}, state, {
                updating: false,
                success: false,
                statusText: action.payload.statusText
            });
        case PROFILE_SAVE_REQUEST:
            return Object.assign({}, state, {
                updating: true,
                success: false,
                statusText: null
            });
        default:
            return state
    }
}