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
import {loadingDone, loadingStarted} from "./actions";
import Loader from "./components/Loader";
import ResearchLoader from "./components/ResearchLoader";

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.loadingStarted();
    }

    componentDidMount() {
        this.props.loadingDone();
    }

    render() {
        const Template = requireAuth(MainTemplate);
        return (

                this.props.isLoading ?
                    <div id={'bckg-loader'}>
                        <ResearchLoader/>
                    </div>
                :
                <div className="App">
                    <Template/>
                </div>

        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    isLoading: state.loader.isLoading
});

export default withRouter(connect(mapStateToProps, (dispatch) => ({
    loadingStarted: () => dispatch(loadingStarted()),
    loadingDone: () => dispatch(loadingDone())
}))(App));
