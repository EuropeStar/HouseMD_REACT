import React, {Component} from 'react';
import {connect} from 'react-redux';
import NotificationItem from "./NotificationItem";
import {
    fetchNotifications, fetchProtectedDataRequest, loginUserFailed, readNotification,
    serverError
} from "../actions";
import SecondaryText from "./SecondaryText";
import {PATH, URLS} from "../backend";
import {checkTokenCloseToEXP} from "../utils/utils";

class NotificationTabBar extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchNotificationsRequest();
        let token = localStorage.getItem('token');
        fetch(PATH + URLS.DASHBOARD, {
            credentials: 'include',
            headers: {
                'Authorization': `JWT ${token}`
            }
        })
            .then(resp => {
                if (resp.status >= 400) {
                    this.props.fetchNotificationsFailed(resp.statusText);
                    this.props.loginUserFailed(resp);
                    throw Error(resp.statusText);
                }
            })
            .then(resp => resp.json())
            .then(resp => {
                let all = resp.notifications;
                let un = all.map(x => {
                    if (!x.is_readed)
                        return x.id
                });
                this.props.fetchNotifications(all, un);
            }).catch(err => {

        })
    }

    fetchAllNotifications() {
        if (this.props.unreadId.length === 0) {
            return <SecondaryText>Нет новых уведомлений</SecondaryText>
        }
        return this.props.allItems.map((key, index) => {
            if (this.props.unreadId.contains(key.id))
                return <NotificationItem key={index} item={key}/>
        })
    }

    render() {
        return (
            <div>
                <h2>Уведомления</h2>
                <h4 className={'secondary-text'}>Всего: {this.props.unreadId.length}</h4>
                <div>
                {this.fetchAllNotifications()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.auth.error,
    isFetching: state.notifications.isFetching,
    allItems: state.notifications.allItems,
    unreadId: state.notifications.unreadId
});

const mapDispatchToProps = (dispatch) => ({
    fetchNotificationsRequest: () => dispatch(fetchProtectedDataRequest()),
    fetchNotifications: (data, unread) => dispatch(fetchNotifications(data, unread)),
    readNotification: (id) => dispatch(readNotification(id)),
    loginUserFailed: (err) => dispatch(loginUserFailed(err)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotificationTabBar);