import React, {Component} from 'react';
import './components/LoginForm'
import './css/bootstrap.min.css';
import './css/style.css';
import './css/design.css';
import MainTemplate from "./Templates/MainTemplate";
import {URLS} from './backend'
import { requireAuth } from './components/AuthWrapper'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {
    loadingDone, loadingStarted, loginUserFailed, refreshToken, refreshTokenFailed,
    refreshTokenRequest
} from "./actions";
import ResearchLoader from "./components/ResearchLoader";
import {checkTokenCloseToEXP} from "./utils/utils";
import {PATH} from "./backend";

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

    componentDidUpdate() {
        if (this.props.isAuthenticated) {
            if (checkTokenCloseToEXP(this.props.exp)) {
                this.props.refreshTokenRequest();
                let token = this.props.token;
                fetch(PATH + URLS.REFRESH_TOKEN, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({'token': `${token}`})
                }).then(resp => {
                    if (resp.status >= 400) {
                        this.props.refreshTokenFailed(resp);
                        throw Error(resp.statusText);
                    }
                }).then(resp => {
                    this.props.refreshToken(resp.token)
                }).catch(err => {

                })
            }
        }
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
    exp: state.auth.exp,
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    isLoading: state.loader.isLoading
});

export default withRouter(connect(mapStateToProps, (dispatch) => ({
    loadingStarted: () => dispatch(loadingStarted()),
    loadingDone: () => dispatch(loadingDone()),
    refreshTokenFailed: (err) => dispatch(refreshTokenFailed(err)),
    refreshToken: (token) => dispatch(refreshToken(token)),
    refreshTokenRequest: ()=> dispatch(refreshTokenRequest())
}))(App));
