import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'jquery'
import 'bootstrap/dist/js/bootstrap';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
    <HashRouter basename='/'>
        <App />
    </HashRouter>,
    document.getElementById('app')
);
registerServiceWorker();
