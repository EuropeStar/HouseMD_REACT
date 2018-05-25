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
import {fetchLastResearch, fetchLastResearchFailed, fetchLastResearchRequest, loginUserFailed} from "../actions";
import {PATH, URLS} from "../backend";
import Warn from "../components/Warn";
import {errorHandle} from "../utils/utils";
import {withRouter} from "react-router-dom";



class ResearchHistory extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchLastResearchRequest();
        let token = localStorage.getItem('token');
        fetch(PATH + URLS.RESEARCH, {
            credentials: 'include',
            headers: {
                'Authorization': `JWT ${token}`
            }
        })
            // .then(resp => {
            //     errorHandle(resp, this.props.fetchLastResearchFailed, this)
            // })
            .then(resp => resp.json())
            .then(resp => {
                this.props.fetchLastResearch(resp);
            })
            .catch(err => console.log(err))

    }

    fetchHistoryList() {
        if (this.props.data.length === 0) {
            console.log(this.props.data);
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
                {this.props.success? null: <Warn>{this.props.statusText}</Warn>}
                <ListView listContent={this.fetchHistoryList()} zeroContent={'У Вас еще нет исследований'}/>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.research.isFetching,
    data: state.research.data,
    statusText: state.research.statusText,
    success: state.research.success
});

const mapDispatchToProps = (dispatch) => ({
    fetchLastResearchRequest: () => dispatch(fetchLastResearchRequest()),
    fetchLastResearch: (data) => dispatch(fetchLastResearch(data)),
    fetchLastResearchFailed: (err) => dispatch(fetchLastResearchFailed(err)),
    loginUserFailed: (err) => dispatch(loginUserFailed(err))
});

export default connect(mapStateToProps, mapDispatchToProps)(ResearchHistory);