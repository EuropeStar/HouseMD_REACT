import React, {Component} from 'react';
import MaterialCard from "./MaterialCard";
import HistoryItem from "./HistoryItem";
import {connect} from "react-redux";
import {fetchLastResearch, fetchLastResearchFailed, fetchLastResearchRequest} from "../actions";
import {PATH, URLS} from "../backend";
import SecondaryText from "./SecondaryText";

class HistoryTabBar extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.fetchLastResearchRequest();
        let token = localStorage.getItem('token');
        fetch(PATH + URLS.RESEARCH, {
            headers: {
                'Authorization': `JWT ${token}`
            }
        }).then(resp => resp.json())
            .then(resp => {
                this.props.fetchLastResearch(resp.data)
            }).catch(err => this.props.fetchLastResearchFailed(err))
    }

    fetchLatestHistory() {
        if (this.props.data.length === 0) {
            return <SecondaryText>У Вас еще нет исследований</SecondaryText>
        }
        return this.props.data.map((key, index) => {
            return <HistoryItem key={index} item={key}/>
        })
    }

    render() {
        return (
            <div>
                <h2>Последние исследования</h2>
                <h4 className={'secondary-text'}>Показано: {this.props.data.length}</h4>
                <div>
                    {this.fetchLatestHistory()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.research.isFetching,
    data: state.research.data
});

const mapDispatchToProps = (dispatch) => ({
    fetchLastResearchRequest: () => dispatch(fetchLastResearchRequest()),
    fetchLastResearch: (data) => dispatch(fetchLastResearch(data)),
    fetchLastResearchFailed: (err) => dispatch(fetchLastResearchFailed(err))
});

export default connect(mapStateToProps, mapDispatchToProps)(HistoryTabBar);