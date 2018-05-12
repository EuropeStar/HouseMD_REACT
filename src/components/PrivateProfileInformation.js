import React, {Component} from 'react';
import SubForm from "./SubForm";
import Field from "./Field";
import OptionList from "./OptionList";
import ButtonOption from "./ButtonOption";
import {PATH, URLS} from "../backend";
import {errorHandle} from "../utils/utils";
import {connect} from "react-redux";
import {loginUserFailed, profileSaveRequest, profileUpdated, profileUpdateFailed} from "../actions";
import Loader from "./Loader";
import AlertWrapper from "./AlertWrapper";

class PrivateProfileInformation extends Component {
    constructor(props) {
        super(props);
    }

    handleSave() {
        this.props.profileUpdateRequest();
        let name = this.firstName.value;
        let last = this.lastName.value;
        fetch(PATH + URLS.PROFILE, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${this.props.token}`
            },
            body: JSON.stringify({
                type: 'private',
                first_name: name,
                last_name: last
            })
        }).then(resp => {
            errorHandle(resp, this.props.profileUpdateFailed, this)
        })
            .then(resp => {
                this.props.profileUpdated()
            })
            .catch(err => {console.log(err)})
    }

    componentDidMount() {
        fetch(PATH + URLS.PROFILE, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${this.props.token}`
            },
        }).then(resp => errorHandle(resp, this.props.profileUpdateFailed, this))
            .then(resp => resp.json())
            .then(resp => {
                this.firstName.value = resp.first_name;
                this.lastName.value = resp.last_name;
            })
            .catch(err => {console.log(err)})
    }

    render() {
        return (
            <SubForm title={'Личная информация'} fieldList={[]}>
                {this.props.updating? <Loader/> : null}
                {this.props.success? <AlertWrapper type={'success'}>Successfully updated</AlertWrapper>: null}
                <Field label={'Имя'} name={'first_name'} type={'text'} required={true} inputRef={(ref) => this.firstName = ref}/>
                <Field label={'Фамилия'} name={'last_name'} type={'text'} required={true} inputRef={(ref)=> this.lastName = ref}/>
                <OptionList>
                    <ButtonOption type={'access'} title={'Сохранить'} handleClick={this.handleSave.bind(this)}/>
                </OptionList>
            </SubForm>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    updating: state.profile.updating,
    success: state.profile.success,
    statusText: state.profile.statusText,
    userId: state.auth.userId
});

const mapDispatchToProps = (dispatch) => ({
    loginUserFailed: (err) => dispatch(loginUserFailed(err)),
    profileUpdateRequest: () => dispatch(profileSaveRequest()),
    profileUpdated: () => dispatch(profileUpdated()),
    profileUpdateFailed: (err) => dispatch(profileUpdateFailed(err))
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateProfileInformation);