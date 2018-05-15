import {
    FETCH_DATA_FAILED,
    FETCH_PROTECTED_DATA_REQUEST, FETCH_SYMPTOMS, PROBABILITY_CALCULATED,
    RECEIVE_PROTECTED_DATA, SEND_RESEARCH_REQUEST
} from '../constants'

const initialState = {
    symptoms: [],
    analysis: [],
    probabilities: [],
    isFetching: false,
    isCalculating: false,
    requestedProbs: false
};

export function data(state = initialState, action) {
    switch (action.type) {
        case FETCH_PROTECTED_DATA_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case FETCH_SYMPTOMS:
            return Object.assign({}, state, {
                isFetching: false,
                symptoms: action.payload.symptoms
            });
        case SEND_RESEARCH_REQUEST:
            return Object.assign({}, state, {
                isCalculating: true,
                requestedProbs: true,
            });
        case PROBABILITY_CALCULATED:
            return Object.assign({}, state, {
                isCalculating: false,
                probabilities: action.payload.probabilities,
                requestedProbs: true,
            });
        case FETCH_DATA_FAILED:
            return Object.assign({}, state, {
                isFetching: false,
                isCalculating: false,
                requestedProbs: false,
            });
        default: return state;
    }
}