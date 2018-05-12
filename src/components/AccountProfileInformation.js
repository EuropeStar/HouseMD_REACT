import React, {Component} from 'react';
import SubForm from "./SubForm";
import Field from "./Field";
import OptionList from "./OptionList";
import ButtonOption from "./ButtonOption";

class AccountProfileInformation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <SubForm title={'Иформация аккаунта'} fieldList={[]}>
                <Field label={'E-mail'} name={'email'} type={'email'} required={true}/>
                <Field label={'Имя пользователя'} name={'username'} type={'text'} required={true}/>
                <OptionList>
                    <ButtonOption title={'Сохранить'} type={'access'}/>
                </OptionList>
            </SubForm>
        )
    }
}

export default AccountProfileInformation;