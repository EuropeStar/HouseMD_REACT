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
    const lbls = props.data.map(key => {return key.disease.name});
    const probs = props.data.map(key => {return key.prob});
    const data = {
        labels: lbls,
        datasets: [{
            data: probs,
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
    const buildListItems = props.data.map((key, index) => {
        return <DiseaseListItem key={index} item={key}/>
    });
    return (
        <div>
            <ListDivider/>
            <TitleBar title={'Результаты исследования'} className={'text-centered'}/>
            <div id={'result-values'}>
                <div className="row">
                    <div className='col-lg-6'>
                        <ListView listContent={buildListItems}/>
                        <h4 className={'text-centered'}>Описание</h4>
                        <div className={'hr'} style={{marginBottom: '10px'}}></div>
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
                <ButtonOption type={'access'} title={'Распечатать результат'}><MiniIcon type={'print'}/></ButtonOption>
            </OptionList>

        </div>
    )
}

export default ResearchResult;