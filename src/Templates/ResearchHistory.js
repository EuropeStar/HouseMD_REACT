import React, {Component} from 'react';
import FullHeightContainer from "../components/FullHeightContainer";
import Toolbar from "../components/Toolbar";
import RightSideView from "../components/RightSideView";
import MaterialCard from "../components/MaterialCard";
import ListView from "../components/ListView";
import ResearchListItem from "../components/ResearchListItem";
import TitleBar from "../components/TitleBar";
import HistoryItem from "../components/HistoryItem";
import SecondaryText from "../components/SecondaryText";

class ResearchHistory extends Component {
    constructor(props) {
        super(props);
    }

    fetchHistoryList() {
        return [
            {
                title: 'Исследование №123 - Иван Иванов',
                propKeys: {
                    'Симптомы': ['Кашель', 'Головная болль', 'Температура'],
                    'Противопоказания': ['Противо1', 'Противо2', 'Противо3'],
                    'Диагноз': ['ОРЗ']
                },
                date: new Date().toLocaleDateString(),
                img: 'assignment',
                color: '#007bff'
            },
            {
                title: 'Исследование №123 - Иван Иванов',
                propKeys: {
                    'Симптомы': ['Кашель', 'Головная болль', 'Температура'],
                    'Противопоказания': ['Противо1', 'Противо2', 'Противо3'],
                    'Диагноз': ['ОРЗ']
                },
                date: new Date().toLocaleDateString(),
                img: 'assignment',
                color: '#007bff'
            },
            {
                title: 'Исследование №123 - Иван Иванов',
                propKeys: {
                    'Симптомы': ['Кашель', 'Головная болль', 'Температура'],
                    'Противопоказания': ['Противо1', 'Противо2', 'Противо3'],
                    'Диагноз': ['ОРЗ']
                },
                date: new Date().toLocaleDateString(),
                img: 'assignment',
                color: '#007bff'
            }
        ];
    }


    render() {
        const buildHistoryList = this.fetchHistoryList().map((val, index) => {
            return <HistoryItem item={val} key={index}/>
        });
        return (
            <div>
                <TitleBar title={'История исследований'}/>
                <SecondaryText>История результатов исследований, нажмите "Детали", чтобы развернуть исследование</SecondaryText>
                <ListView listContent={buildHistoryList} zeroContent={'No research history yet...'}/>
            </div>

        )
    }
}

export default ResearchHistory;