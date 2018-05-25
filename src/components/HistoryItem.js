import React from 'react';
import MaterialCard from "./MaterialCard";

function HistoryItem(props) {
    /*
                title: 'Исследование №123 - Иван Иванов',
                propKeys: {
                    'Симптомы': ['Кашель', 'Головная болль', 'Температура'],
                    'Противопоказания': ['Противо1', 'Противо2', 'Противо3'],
                    'Диагноз': ['ОРЗ']
                },
                date: new Date().toLocaleDateString(),
                img: 'assignment',
                color: '#007bff'
     */
    return (
        <div className={'item-bar'}>
            <MaterialCard>
                <div className={'row'}>
                        <span style={{fontSize: '40px', color: '#007bff'}} className={'material-icons'}>assignment</span><h2 style={{color: '#323232'}}>{`Исследование №${props.item.id}: ${props.item.patient}`}</h2>

                    <div className={'col-lg-10'}>
                        <h4><strong>Симптомы:</strong></h4>
                            <p style={{fontSize: '21px'}}>
                                {props.item.symptoms.map(value => {return `${value.name}, \n`})}
                            </p>
                        <h4><strong>Анализы:</strong></h4>
                        <p style={{fontSize: '21px'}}>
                            {props.item.analysis.map(value => {return `${value.name.name}, \n`})}
                        </p>
                        <div className={'in-date'}>{new Date(props.item.date_time).toLocaleString()}</div>
                    </div>
                    <div className={'col-lg-2'}>
                        <div style={{position: 'absolute', bottom: '0'}}>
                            <a href={'#'} style={{fontSize: '20px'}}>Детали</a>
                        </div>
                    </div>
                </div>
            </MaterialCard>
        </div>
    )
}

export default HistoryItem