import React, {Component} from 'react';
import MaterialCard from "./MaterialCard";
import HistoryItem from "./HistoryItem";

class HistoryTabBar extends Component {
    constructor(props) {
        super(props);
    }

    fetchLatestHistory() {
        const notes = [
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
        return notes.map((key, index) => {
            return <HistoryItem key={index} item={key}/>
        })
    }

    render() {
        return (
            <div>
                <h2>Последние исследования</h2>
                <h4 className={'secondary-text'}>Показано: 4</h4>
                <div>
                    {this.fetchLatestHistory()}
                </div>
            </div>
        )
    }
}

export default HistoryTabBar;