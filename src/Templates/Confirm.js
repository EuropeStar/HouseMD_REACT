import React, {Component} from 'react';
import MaterialCard from '../components/MaterialCard';
import FullHeightContainer from '../components/FullHeightContainer';
import Field from '../components/Field';
import OptionList from "../components/OptionList";
import ButtonOption from "../components/ButtonOption";
import PostForm from '../components/PostForm';
import PhotoThumbnail from '../components/PhtoThumbnail';
import {STATIC_PATH} from '../backend';

class UserConfirmation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const slt = {marginTop: '50px'};
        return (
            <FullHeightContainer container={'true'}>
                <PhotoThumbnail url={STATIC_PATH + '/img/user.png'} style={slt}/>
                <h2 className="text-centered" id="user-name">Shiffer Maddison</h2>
                <p className="col-lg-10 centered text-centered" id="conf-text">
                    Добро пожаловать в систему.
                    Перед началом введите новый пароль, никому не передавайте его.
                </p>
                <MaterialCard id="user-conf">
                    <PostForm method={"POST"} action={'/login'}>
                        <Field label="Password" placeholder="Password" name={"pass1"} type={'password'}/>
                        <Field label="Confirm password" placeholder="Password again" name={"pass2"} type={'password'}/>
                        <div className="mt">
                            <OptionList>
                                <ButtonOption title={'Submit'}/>
                            </OptionList>
                        </div>
                    </PostForm>
                </MaterialCard>
            </FullHeightContainer>
        )
    }
}

export default UserConfirmation;