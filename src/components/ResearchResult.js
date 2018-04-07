import React from 'react';
import {Pie} from 'react-chartjs-2'
import ListView from "./ListView";
import ResearchListItem from "./ResearchListItem";
import DiseaseListItem from "./DiseaseListItem";
import OptionList from "./OptionList";
import ButtonOption from "./ButtonOption";
import MiniIcon from "./MiniIcon";
import TitleBar from "./TitleBar";
import ListDivider from "./ListDivider";


function ResearchResult(props) {
    const data = {
        labels: [
            'Red',
            'Green',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ]
        }]
    };
    const chart = <Pie data={data} width={1} height={1}/>;
    const ProbabilityList = [];
    const buildListItems = [{name: 'Болезнь 1', 'P': '60%'}, {name: 'Болезнь 2', 'P': '30%'}, {
        name: 'Болезнь 3',
        'P': '10%'
    }].map((key) => {
        return <DiseaseListItem item={key}/>
    });
    return (
        <div>
            <ListDivider/>
            <TitleBar title={'Результаты исследования'} className={'text-centered'}/>
            <div id={'result-values'}>
                <div className="row">
                    <div className='col-lg-6'>
                        <ListView listContent={buildListItems}/>
                    </div>
                    <div className='col-lg-3 offset-1'>
                        <div className="row">
                            {chart}
                        </div>
                    </div>
                </div>
            </div>
            <ListDivider/>

            <OptionList>
                <ButtonOption type={'error'} title={'Запросить подтверждение'}><MiniIcon type={'reply'}/></ButtonOption>
                <ButtonOption type={'secondary'} title={'Сохранить'}><MiniIcon type={'save'}/></ButtonOption>
                <ButtonOption type={'access'} title={'Распечатать результат'}><MiniIcon type={'print'}/></ButtonOption>
            </OptionList>

        </div>
    )
}

export default ResearchResult;