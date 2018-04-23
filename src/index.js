import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'jquery'
import 'bootstrap/dist/js/bootstrap';
import registerServiceWorker from './registerServiceWorker';
import {Router} from 'react-router-dom'
import {Provider} from 'react-redux';
import {store} from "./reducers";
import {loginUserSuccess} from "./actions";
import {history} from './reducers/index';


const token = localStorage.getItem('token');
if (token !== null) {
    store.dispatch(loginUserSuccess(token))
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
