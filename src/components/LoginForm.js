import React, {Component} from 'react';
import MaterialCard from "./MaterialCard";
import OptionList from './OptionList';
import Field from './Field';
import LinkOption from './LinkOption';
import ButtonOption from './ButtonOption';
import PostForm from './PostForm';
import {loginUserFailed, loginUserRequest, loginUserSuccess, serverError} from "../actions";
import {connect} from "react-redux";
import {LOGIN_URL, PATH} from "../backend";
import Warn from "./Warn";
import $ from 'jquery';
import Loader from "./Loader";
import AlertWrapper from "./AlertWrapper";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            statusText: ''
        }
    }

    login(login, password, redirect="/") {
        this.props.loginRequest();
        fetch(PATH + LOGIN_URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: login, password: password})
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.token && resp.token !== '')
                    this.props.loginSuccess(resp.token);
                else
                    this.props.loginFailed({
                        response: {
                            statusText: 'Неверный логин или пароль'
                        }
                    });
            }).catch(err => {
                this.props.loginServerError("Ошибка интеренет соединения")
            })
    }

    onLogin(e) {
        let username = this.logInRef.value;
        let password = this.passwordRef.value;
        this.login(username, password);
        e.preventDefault();
    }

    render() {
        return (
            <MaterialCard rd id="log-form">
                { this.props.statusText? <AlertWrapper type='danger'>{this.props.statusText}</AlertWrapper> : null}
                {this.props.authInProgress? <Loader/>:null}
                <PostForm>
                    <Field label={'Username'} placeholder={'Example'} name={"login"} inputRef={el => this.logInRef = el}/>
                    <Field label={'Password'} placeholder={'Password'} name={'password'} type={'password'}
                           inputRef={el => this.passwordRef = el}/>
                    <div className="mt">
                        <OptionList>
                            <ButtonOption title={'Submit'} type={"access"} handleClick={this.onLogin.bind(this)}/>
                            <LinkOption title={'Remind password'}/>
                        </OptionList>
                    </div>
                </PostForm>
            </MaterialCard>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    isAuthenticated: state.auth.isAuthenticated,
    authInProgress: state.auth.authInProgress,
    statusText: state.auth.statusText
});

const dispatchToProps = (dispatch) => ({
    loginRequest: () => dispatch(loginUserRequest()),
    loginFailed: (error) => dispatch(loginUserFailed(error)),
    loginSuccess: () => dispatch(loginUserSuccess()),
    loginServerError: (text) => dispatch(serverError(text))
});

export default connect(mapStateToProps, dispatchToProps)(LoginForm);