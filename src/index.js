import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'jquery'
import 'bootstrap/dist/js/bootstrap';
import registerServiceWorker from './registerServiceWorker';
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux';
import {store} from "./reducers";
import {loginUserSuccess, obtainUserInfo} from "./actions";
import {history} from './reducers/index';


const token = localStorage.getItem('token');
const info = JSON.parse(localStorage.getItem('info'));
if (token !== null) {
    store.dispatch(loginUserSuccess(token));
    store.dispatch(obtainUserInfo(info));
}

ReactDOM.render(
    <Provider store={store}>
        <Router basename='/' history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('app')
);
registerServiceWorker();
