import React, {Component} from 'react';
import ResearchCard from "../components/ResearchCard";
import TitleBar from "../components/TitleBar";
import Warn from "../components/Warn";
import SecondaryText from "../components/SecondaryText";


class Research extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TitleBar title={'Исследование'}/>
                <SecondaryText>Заполните все поля помеченные <Warn>*</Warn> и нажмите "Расчитать", чтобы узнать результат. <br></br>
                    <Warn> Внимание:</Warn> чем больше данных Вы заполните, тем выше вероятность результата. Если Вы не уверены в своем решении
                    Вы можете отправить результаты на подтверждение.
                </SecondaryText>
                <ResearchCard/>
            </div>
        )
    }
}

export default Research;