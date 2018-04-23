import {applyMiddleware, createStore} from 'redux';
import {combineReducers} from 'redux'
import {auth} from './auth'
import {data} from './data'
import {routerMiddleware, routerReducer} from 'react-router-redux'
import {createBrowserHistory} from 'history'

export const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const application = combineReducers({
    auth,
    data,
    routing: routerReducer,
});

export const store = createStore(application, applyMiddleware(middleware));

store.subscribe((store) => console.log(store));