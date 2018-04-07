import React, {Component} from 'react';
import ResearchCard from "../components/ResearchCard";
import TitleBar from "../components/TitleBar";
import Warn from "../components/Warn";


class Research extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TitleBar title={'Исследование'}/>
                <h4 className={'secondary-text'}>Заполните все поля помеченные <Warn text={'*'}/> и нажмите "Расчитать", чтобы узнать результат. <br></br>
                    <Warn text={'Внимание:'}/> чем больше данных Вы заполните, тем выше вероятность результата. Если Вы не уверены в своем решении
                    Вы можете отправить результаты на подтверждение.
                    </h4>
                <ResearchCard/>
            </div>
        )
    }
}

export default Research;