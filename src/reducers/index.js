import {applyMiddleware, createStore} from 'redux';
import {combineReducers} from 'redux'
import {auth} from './auth'
import {data} from './data'
import {routerMiddleware, routerReducer} from 'react-router-redux'
import {createBrowserHistory} from 'history'
import {notifications} from "./notifications";
import {research} from "./research";
import {loader} from "./loader";
import {profile} from "./profile";

export const history = createBrowserHistory();

const middleware = routerMiddleware(history);

const application = combineReducers({
    auth,
    data,
    notifications,
    research,
    loader,
    profile,
    routing: routerReducer,
});

export const store = createStore(application, applyMiddleware(middleware));

store.subscribe((store) => console.log(store));