import React, {Component} from 'react';
import PostForm from './PostForm';
import MaterialCard from "./MaterialCard";
import $ from 'jquery';
import OptionList from "./OptionList";
import SubForm from "./SubForm";
import ExtendableFieldSet from "./ExtendableFieldSet";
import ButtonOption from "./ButtonOption";
import ResearchLoader from "./ResearchLoader";
import ResearchResult from "./ResearchResult";
import MiniIcon from "./MiniIcon";
import ListDivider from "./ListDivider";
import TitleBar from "./TitleBar";

class ResearchCard extends Component {
    constructor(props) {
        super(props);
        this.countProbabilities = this.countProbabilities.bind(this);
        this.state = {
            result: null
        }
    }

    countProbabilities(e) {
        this.setState({
            result: <ResearchResult/>
        });
        e.preventDefault();
        e.stopPropagation();
    }


    render() {
        const personalFieldList = [
            {
                label: 'First name',
                name: 'first_name',
                required: true
            },
            {
                label: 'Second name',
                name: 'second_name',
                required: true
            },
            {
                label: 'Age',
                name: 'age',
                type: 'number'
            },
            {
                label: 'Sex',
                name: 'sex',
                special: 'dropdown',
                list: [
                    'Male',
                    'Female'
                ]
            }
        ];
        return (
            <MaterialCard id='research'>
                <PostForm method='POST'>
                    <div className="row">
                        <div className="col-lg-5">
                            <SubForm title={'Personal info'} fieldList={personalFieldList}/>
                            <ExtendableFieldSet title={'Symptoms'}/>
                        </div>
                        <div className="col-lg-5 offset-lg-1">
                            <ExtendableFieldSet title={'Contraindications'}/>
                            <ExtendableFieldSet title={'Tests'}/>
                        </div>
                    </div>
                    <div className={'row centered'}>
                        <OptionList>
                            <ButtonOption title={'Расчитать'} type={'access'} handleClick={this.countProbabilities}><MiniIcon type={'search'}/></ButtonOption>
                        </OptionList>
                    </div>
                </PostForm>
                <div id={'result'}>
                    {this.state.result}
                </div>
            </MaterialCard>
        )
    }
}

export default ResearchCard;