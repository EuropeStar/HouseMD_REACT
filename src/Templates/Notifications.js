import React, {Component} from 'react';
import TitleBar from "../components/TitleBar";
import SecondaryText from "../components/SecondaryText";
import LinkOption from "../components/LinkOption";
import HistoryItem from "../components/HistoryItem";
import NotificationItem from "../components/NotificationItem";
import ListView from "../components/ListView";
import {fetchNotifications, fetchProtectedDataRequest, logout, readNotification, serverError} from "../actions";
import {connect} from "react-redux";
import {PATH} from "../backend";

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.loadNotificationList = this.loadNotificationList.bind(this);
    }

    componentDidMount() {
        this.props.fetchNotificationsRequest();
        let token = localStorage.getItem('token');
        fetch(PATH + '/notifications', {
            credentials: 'include',
            headers: {
                'Authorization': `JWT ${token}`
            }
        }).then(resp => resp.json())
            .then(resp => {
                let all = resp.data;
                let un = all.map(x => {
                    if (!x.is_readed)
                        return x.id
                });
                this.props.fetchNotifications(all, un);
            }).catch(err => this.props.serverError(err))
    }

    loadNotificationList() {
        return this.props.allItems.map((key, index) => {
            return <NotificationItem item={key} key={index}/>
        })
    }

    render() {
        return (
            <div>
                <TitleBar title={'Уведомления'}/>
                <SecondaryText>Список уведомлений</SecondaryText>
                <LinkOption title={'Показать только непрочитанные'}/>
                <ListView listContent={this.loadNotificationList()} zeroContent={'У Вас нет уведомлений'}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isFetching: state.notifications.isFetching,
    allItems: state.notifications.allItems,
    unreadId: state.notifications.unreadId
});

const mapDispathcToProps = (dispatch) => ({
    fetchNotificationsRequest: () => dispatch(fetchProtectedDataRequest()),
    fetchNotifications: (data, unread) => dispatch(fetchNotifications(data, unread)),
    readNotification: (id) => dispatch(readNotification(id)),
    logout: () => dispatch(logout()),
    serverError: (err) => dispatch(serverError(err)),
});

export default connect(mapStateToProps, mapDispathcToProps)(Notifications);