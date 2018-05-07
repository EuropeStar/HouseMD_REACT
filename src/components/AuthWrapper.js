import React from "react";
import {connect} from "react-redux";
import SignIn from "../Templates/Sign_in";
import push from 'react-router-redux';
import {history} from '../reducers/index';

export function requireAuth(Component) {

    class AuthenticatedComponent extends React.Component {
        constructor(props) {
            super(props);
        }

        checkAuth() {
            if (!this.props.isAuthenticated) {
                if (history.location.pathname !== '/login')
                    history.push('/login');
                return <SignIn/>
            } else {
                return <Component {...this.props}/>
            }
        }

        render () {
            return (
                <div>
                    {
                        this.checkAuth()
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => ({
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated,
        history: state.router
    });

    const mapDispatchToProps = (dispatch) => ({
    });

    return connect(mapStateToProps, mapDispatchToProps)(AuthenticatedComponent);

}