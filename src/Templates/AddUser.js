import React, {Component} from 'react';
import TitleBar from "../components/TitleBar";
import SecondaryText from "../components/SecondaryText";
import Warn from "../components/Warn";

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
            </div>
        )
    }
}

export default AddUser;