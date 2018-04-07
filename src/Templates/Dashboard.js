import React, {Component} from 'react';
import NotificationTabBar from "../components/NotificationTabBar";
import HistoryTabBar from "../components/HistoryTabBar";

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id={'dashboard'} className={'row'}>
                <div className={'col-lg-6'}>
                    <NotificationTabBar/>
                </div>
                <div className={'col-lg-6'}>
                    <HistoryTabBar/>
                </div>
            </div>
        )
    }
}

export default Dashboard;