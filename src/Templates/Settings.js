import React, {Component} from 'react';
import MaterialCard from "../components/MaterialCard";
import TitleBar from "../components/TitleBar";
import SecondaryText from "../components/SecondaryText";
import PhotoThumbnail from "../components/PhtoThumbnail";
import SubForm from "../components/SubForm";
import ButtonOption from "../components/ButtonOption";
import OptionList from "../components/OptionList";
import {DEFAULT_IMG, STATIC_PATH} from '../backend'

const profileFields = [
    {
        label: 'Имя',
        name: 'first_name',
        required: true,
    },
    {
        label: 'Фамилия',
        name: 'second_name',
        required: true
    },
    {
        label: 'Отчество',
        name: 'third_name',
        required: false
    }
];

const accountFields = [
    {
        label: 'Старый пароль',
        name: 'old_pass',
        type: 'password'
    },
    {
        label: 'Новый пароль',
        name: 'new_pass',
        type: 'password'
    },
    {
        label: 'Повторите новый пароль',
        name: 'new_pass_again',
        type: 'password'
    },
];

class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TitleBar title={'Настройки профиля'}/>
                <SecondaryText>Вы можете изменить информацию о пользователе</SecondaryText>
                <MaterialCard>
                    <div className={'centered'}>
                        <PhotoThumbnail url={STATIC_PATH + DEFAULT_IMG}/>
                    </div>
                    <div className={'row'}>
                        <div className={'col-lg-5'}>
                            <SubForm title={'Личная информация'} fieldList={profileFields}/>
                        </div>
                        <div className={'col-lg-5 offset-lg-1'}>
                            <SubForm title={'Настройки аккаунта'} fieldList={accountFields}/>
                        </div>
                    </div>
                    <OptionList>
                        <ButtonOption title={'Сохранить'} type={'access'}/>
                    </OptionList>
                </MaterialCard>
            </div>
        )
    }
}

export default Settings;