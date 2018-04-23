import {createStore} from 'redux';
import {combineReducers} from 'redux'
import {auth} from './auth'
import {data} from './data'
import {routerReducer} from 'react-router-redux'


export const application = combineReducers({
    auth,
    data,
    router: routerReducer
});

export const store = createStore(application);

store.subscribe((store) => console.log(store));