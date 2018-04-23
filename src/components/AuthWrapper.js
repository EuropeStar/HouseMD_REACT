import React from "react";
import {connect} from "react-redux";
import SignIn from "../Templates/Sign_in";
import push from 'react-router-redux';


export function requireAuth(Component) {

    class AuthenticatedComponent extends React.Component {

        render () {
            return (
                <div>
                    {
                        this.props.isAuthenticated
                        ? <Component {...this.props}/> : <SignIn/>
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => ({
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated
    });

    return connect(mapStateToProps)(AuthenticatedComponent);

}