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
                    <div className={'col-lg-10'}>
                        <ul className={'notif-inline-title'}>
                            <li className={'linear no-mar'}><span style={{fontSize: '40px', color: props.item.color}} className={'material-icons'}>{props.item.img}</span></li>
                            <li className={'linear no-mar'}><h2 style={{color: '#323232'}}>{props.item.title}</h2></li>
                        </ul>
                        <p style={{fontSize: '21px'}}>
                            {Object.keys(props.item.propKeys).map((key) => {return key + ": " + props.item.propKeys[key].join(', ') + '\n'})}
                        </p>
                        <div className={'in-date'}>{props.item.date}</div>
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