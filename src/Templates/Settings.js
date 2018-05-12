import React, {Component} from 'react';
import MaterialCard from "../components/MaterialCard";
import TitleBar from "../components/TitleBar";
import SecondaryText from "../components/SecondaryText";
import PhotoThumbnail from "../components/PhtoThumbnail";
import SubForm from "../components/SubForm";
import ButtonOption from "../components/ButtonOption";
import OptionList from "../components/OptionList";
import {DEFAULT_IMG, STATIC_PATH} from '../backend'
import AccountProfileInformation from "../components/AccountProfileInformation";
import PrivateProfileInformation from "../components/PrivateProfileInformation";

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
                        <div className={'col-lg-4 offset-lg-4'}>
                            <PrivateProfileInformation/>
                            <AccountProfileInformation/>
                        </div>
                    </div>
                </MaterialCard>
            </div>
        )
    }
}

export default Settings;