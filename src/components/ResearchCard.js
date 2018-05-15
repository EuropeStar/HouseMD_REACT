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
import {connect} from "react-redux";
import {PATH, URLS} from "../backend";
import {
    fetchDataFailed,
    fetchSymptomsRequest, fetchSymptomsSuccess, loginUserFailed, probabilityCalculated,
    sendResearchRequest
} from "../actions";
import {errorHandle} from "../utils/utils";

class ResearchCard extends Component {
    constructor(props) {
        super(props);
        this.countProbabilities = this.countProbabilities.bind(this);
    }

    countProbabilities(e) {
        this.props.sendResearchRequest();
        fetch(PATH + URLS.SEND_EXAMINATION, {
            method: 'POST',
            headers: {'Authorization': `JWT ${this.props.token}`,
                'Content-Type': 'application/json'},
            body: JSON.stringify(this.bindResultFields())
        })
            .then(resp => errorHandle(resp, this.props.fetchDataFailed, this))
            .then(resp => resp.json())
            .then(resp => {
                this.props.probabilitiesCalculated(resp.diseases)
            }).catch(reason => {});
        e.preventDefault();
        e.stopPropagation();
    }

    componentWillMount() {
        this.prefetchInfo();
    }

    prefetchInfo() {
        this.props.fetchSymptomsRequest();
        fetch(PATH + URLS.SYMPTOMS, {
            headers: {
                'Authorization': `JWT ${this.props.token}`,
                'Content-Type': 'application/json',
            }
        })
            .then(resp => errorHandle(resp, null, this))
            .then(resp => resp.json())
            .then(resp => {
                this.props.fetchSymptomsSuccess(resp)
            }).catch(resp => {
        })
    }

    bindResultFields() {
        return {
            patient: this.fio.value,
            age: this.age.value,
            sex: this.sex.value,
            symptoms: this.getSymptoms(),
            analysis: [],
        }
    }

    componentWillUnmount() {
        this.props.fetchDataFailed();
    }

    getSymptoms() {
        let out = [];
        let ojb = $('.gather-symptom');
        $.each(ojb, function (el, key) {
            out.push(key.value)
        });
        return out;
    }

    showResult() {
        if (this.props.requestedProbs) {
            if (this.props.isCalculating) {
                return <ResearchLoader/>
            } else {
                console.log(this.props.probabilities);
                return <ResearchResult data={this.props.probabilities}/>
            }
        }
    }

    render() {
        const personalFieldList = [
            {
                label: 'ФИО',
                name: 'first_name',
                inputRef: (el) => this.fio = el,
                required: true
            },
            {
                label: 'Возраст',
                name: 'age',
                type: 'number',
                inputRef: (el) => this.age = el,
                required: true,
                special: 'dropdown',
                list: [
                    {id: 0, name: '0'},
                    {id: 1, name: '< 1 года'},
                    {id: 2, name: '1 -5 лет'},
                    {id: 3, name: '5 - 18 лет'},
                    {id: 4, name: '18 - 60 лет'},
                    {id: 5, name: ' > 60 лет'}
                ]
            },
            {
                label: 'Пол',
                name: 'sex',
                inputRef: (el) => this.sex = el,
                special: 'dropdown',
                list: [
                    {id: 1, name: 'Мужской'},
                    {id: 0, name: 'Женский'}
                ]
            }
        ];
        return (
            <MaterialCard id='research'>
                <div className="row">
                    <div className="col-lg-6 offset-3">
                        <SubForm title={'Информация о пациенте'} fieldList={personalFieldList}/>
                    </div>
                    <div className="col-lg-12">
                        <ExtendableFieldSet title={'Симптомы'} list={this.props.symptoms || []} name={'symptom'}/>
                        <ExtendableFieldSet title={'Анализы'} list={[]} combiner={this.analysis} name={'analysis'}/>
                    </div>
                </div>
                <div className={'row centered'}>
                    <OptionList>
                        <ButtonOption title={'Расчитать'}
                                      type={'access'}
                                      handleClick={this.countProbabilities}><MiniIcon
                            type={'search'}/></ButtonOption>
                    </OptionList>
                </div>
                <div id={'result'}>
                    {this.showResult()}
                </div>
            </MaterialCard>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.auth.token,
    symptoms: state.data.symptoms,
    isFetching: state.data.isFetching,
    isCalculating: state.data.isCalculating,
    probabilities: state.data.probabilities,
    requestedProbs: state.data.requestedProbs
});

const mapDispatchToProps = (dispatch) => ({
    fetchSymptomsRequest: () => dispatch(fetchSymptomsRequest()),
    fetchSymptomsSuccess: (symptoms) => dispatch(fetchSymptomsSuccess(symptoms)),
    loginUserFailed: (err) => dispatch(loginUserFailed(err)),
    sendResearchRequest: () => dispatch(sendResearchRequest()),
    probabilitiesCalculated: (probs) => dispatch(probabilityCalculated(probs)),
    fetchDataFailed: () => dispatch(fetchDataFailed())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResearchCard);