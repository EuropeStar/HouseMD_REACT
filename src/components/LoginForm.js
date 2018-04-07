import React, {Component} from 'react';
import MaterialCard from "./MaterialCard";
import OptionList from './OptionList';
import Field from './Field';
import LinkOption from './LinkOption';
import ButtonOption from './ButtonOption';
import PostForm from './PostForm';

function LoginForm(props) {
    return (
        <MaterialCard rd id="log-form">
            <PostForm method={'POST'}>
                <Field label={'Username'} placeholder={'Example'} name={"login"}/>
                <Field label={'Password'} placeholder={'Password'} name={'password'} type={'password'}/>
                <div className="mt">
                    <OptionList>
                        <ButtonOption title={'Submit'}/>
                        <LinkOption title={'Remind password'}/>
                    </OptionList>
                </div>
            </PostForm>
        </MaterialCard>
    )
}

export default LoginForm;