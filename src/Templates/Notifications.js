import React, {Component} from 'react';
import TitleBar from "../components/TitleBar";

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.loadNotificationList = this.loadNotificationList.bind(this);
    }

    loadNotificationList() {

    }

    render() {
        return (
            <TitleBar title={'Уведомления'}/>

        )
    }
}

export default Notifications;