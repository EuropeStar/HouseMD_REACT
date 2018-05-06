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
import {connect} from "react-redux";
import {fetchLastResearch, fetchLastResearchFailed, fetchLastResearchRequest} from "../actions";
import {PATH, URLS} from "../backend";
import Warn from "../components/Warn";

class ResearchHistory extends Component {
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
                let data = resp.data;
                this.props.fetchLastResearch(data);
            })
            .catch(err => {
                this.props.fetchLastResearchFailed(err)
            })
    }

    fetchHistoryList() {
        if (this.props.data.length === 0) {
            return null;
        }
        return this.props.data.map((val, index) => {
            return <HistoryItem item={val} key={index}/>
        });
    }


    render() {
        return (
            <div>
                <TitleBar title={'История исследований'}/>
                <SecondaryText>История результатов исследований, нажмите "Детали", чтобы развернуть исследование</SecondaryText>
                {this.props.statusText? <Warn>{this.props.statusText}</Warn> : null}
                <ListView listContent={this.fetchHistoryList()} zeroContent={'У Вас еще нет исследований'}/>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.research.isFetching,
    data: state.research.data,
    statusText: state.research.statusText
});

const mapDispatchToProps = (dispatch) => ({
    fetchLastResearchRequest: () => dispatch(fetchLastResearchRequest()),
    fetchLastResearch: (data) => dispatch(fetchLastResearch(data)),
    fetchLastResearchFailed: (err) => dispatch(fetchLastResearchFailed(err))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResearchHistory);