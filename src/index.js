import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'jquery'
import 'bootstrap/dist/js/bootstrap';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from "./reducers";
import {loginUserSuccess} from "./actions";


const token = localStorage.getItem('token');
if (token !== null) {
    store.dispatch(loginUserSuccess(token))
}

ReactDOM.render(
    <Provider store={store}>
        <HashRouter basename='/'>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('app')
);
registerServiceWorker();
