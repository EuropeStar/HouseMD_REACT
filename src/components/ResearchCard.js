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
    fetchResearchMetaDataRequest, fetchResearchMetaDataSuccess, loginUserFailed, probabilityCalculated,
    sendResearchRequest
} from "../actions";
import {errorHandle, toAnalysisConverter} from "../utils/utils";
import Select from 'react-select'
import 'react-select/dist/react-select.css';
import AnalysisContainer from "../components/AnalysisContainer";




class ResearchCard extends Component {
    constructor(props) {
        super(props);
        this.countProbabilities = this.countProbabilities.bind(this);
        this.state = {
            symptoms: '',
            analysis: ''
        }
    }

    countProbabilities(e) {
        if (this.isValid()) {
            console.log(this.bindResultFields());
            this.props.sendResearchRequest();
            fetch(PATH + URLS.SEND_EXAMINATION, {
                method: 'POST',
                headers: {
                    'Authorization': `JWT ${this.props.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.bindResultFields())
            })
                .then(resp => errorHandle(resp, this.props.fetchDataFailed, this))
                .then(resp => resp.json())
                .then(resp => {
                    this.props.probabilitiesCalculated(resp.diseases)
                }).catch(reason => {
            });
        } else {
            this.props.fetchDataFailed();
            alert("Incorrect fields")
        }
        e.preventDefault();
        e.stopPropagation();
    }

    componentWillMount() {
        this.prefetchInfo();
    }

    prefetchInfo() {
        this.props.fetchResearchMetaDataRequest();
        fetch(PATH + URLS.RESEARCH_META, {
            headers: {
                'Authorization': `JWT ${this.props.token}`,
                'Content-Type': 'application/json',
            }
        })
            .then(resp => errorHandle(resp, null, this))
            .then(resp => resp.json())
            .then(resp => {
                this.props.fetchResearchMetaDataSuccess(resp);
            }).catch(resp => {
        })
    }

    isValid() {
        return this.state.patient !== "" && this.state.symptoms.length !== 0
    }

    bindResultFields() {
        return {
            patient: this.fio.value,
            age: this.age.value,
            sex: this.sex.value,
            symptoms: this.state.symptoms,
            analysis: toAnalysisConverter(this.state.analysis)
        }
    }

    componentWillUnmount() {
        this.props.fetchDataFailed();
    }

    getSymptoms(item) {
        this.setState({symptoms: item})
    }

    getAnalysis(item) {
        this.setState({analysis: item})
    }

    showResult() {
        if (this.props.requestedProbs) {
            if (this.props.isCalculating) {
                return <ResearchLoader/>
            } else {
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
                    <div className="col-lg-5">
                        <SubForm title={'Информация о пациенте'} fieldList={personalFieldList}/>
                    </div>
                    <div className="col-lg-5 offset-1" style={{marginBottom: '10px'}}>
                        <h4 className={'text-centered'}>Симптомы и Анализы</h4>
                        <div className={'hr'} style={{marginBottom: '10px'}}></div>
                        <label className={'form-lbl'}>Симптомы</label>
                        {this.props.symptoms !== undefined ?
                            <Select
                                name={'symptom-select'}
                                onChange={this.getSymptoms.bind(this)}
                                value={this.state.symptoms}
                                multi={true}
                                simpleValue={true}
                                className={'form-control field'}
                                options={
                                    this.props.symptoms.reduce((cur, v, ind, arr) => {
                                        cur.push({value: v.id, label: v.name}); return cur
                                    }, [])
                                }
                            /> : null
                        }
                        <label className={'form-lbl'}>Анализы</label>
                        {this.props.analysis !== undefined ?
                            <AnalysisContainer
                                analysis={this.props.analysis}
                                onChange={this.getAnalysis.bind(this)}
                            /> : null
                        }
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
    analysis: state.data.analysis,
    isFetching: state.data.isFetching,
    isCalculating: state.data.isCalculating,
    probabilities: state.data.probabilities,
    requestedProbs: state.data.requestedProbs
});

const mapDispatchToProps = (dispatch) => ({
    fetchResearchMetaDataRequest: () => dispatch(fetchResearchMetaDataRequest()),
    fetchResearchMetaDataSuccess: (resp) => dispatch(fetchResearchMetaDataSuccess(resp)),
    loginUserFailed: (err) => dispatch(loginUserFailed(err)),
    sendResearchRequest: () => dispatch(sendResearchRequest()),
    probabilitiesCalculated: (probs) => dispatch(probabilityCalculated(probs)),
    fetchDataFailed: () => dispatch(fetchDataFailed())
});

export default connect(mapStateToProps, mapDispatchToProps)(ResearchCard);