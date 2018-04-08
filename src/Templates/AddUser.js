import React, {Component} from 'react';
import TitleBar from "../components/TitleBar";
import SecondaryText from "../components/SecondaryText";
import Warn from "../components/Warn";
import MaterialCard from "../components/MaterialCard";
import SubForm from "../components/SubForm";
import PhotoThumbnail from "../components/PhtoThumbnail";
import OptionList from "../components/OptionList";
import ButtonOption from "../components/ButtonOption";


const fields = [
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
    },
    {
        label: 'Дата рождения',
        name: 'birth',
        required: false
    },
    {
        label: 'Пол',
        name: 'sex',
        required: true,
        special: 'dropdown',
        list: [
            'Мужской',
            'Женскиий'
        ]
    },
    {
        label: 'Специальность',
        name: 'doc_spec',
        required: true,
        special: 'dropdown',
        list: [
            'Хирург',
            'Окулист',
            'Педиатор'
        ]
    }
];

class AddUser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TitleBar title={'Добавить нового пользователя'}/>
                <SecondaryText>
                    Вы можете добавить нового пользователя выступающего в роли октора <Warn text={'Внимание'}/>
                </SecondaryText>
                <MaterialCard>
                    <div className={'centered'}>
                        <PhotoThumbnail/>
                    </div>
                    <div className={'col-lg-6 offset-lg-3'}>
                        <SubForm title={'Общая информация'} fieldList={fields}/>
                    </div>
                    <OptionList>
                        <ButtonOption title={'Сохранить'} type={'access'}/>
                    </OptionList>
                </MaterialCard>
            </div>
        )
    }
}

export default AddUser;