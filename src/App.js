import React, {Component} from 'react';
import './components/LoginForm'
import './css/bootstrap.min.css';
import './css/style.css';
import './css/design.css';
import MainTemplate from "./Templates/MainTemplate";
import SignIn from "./Templates/Sign_in";
import { requireAuth } from './components/AuthWrapper'
import {connect} from 'react-redux'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: false
        }
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

export default connect(mapStateToProps, (dispatch) => ({}))(App);
