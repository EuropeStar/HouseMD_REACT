import React, {Component} from 'react';
import './components/LoginForm'
import './css/bootstrap.min.css';
import './css/style.css';
import './css/design.css';
import MainTemplate from "./Templates/MainTemplate";
import SignIn from "./Templates/Sign_in";
import { requireAuth } from './components/AuthWrapper'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        const Template = requireAuth(MainTemplate);
        return (
            <div className="App">
               <Template/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token
});

export default withRouter(connect(mapStateToProps, (dispatch) => ({}))(App));
