import React, {Component} from 'react';
import TitleBar from "../components/TitleBar";
import SecondaryText from "../components/SecondaryText";
import LinkOption from "../components/LinkOption";
import HistoryItem from "../components/HistoryItem";
import NotificationItem from "../components/NotificationItem";
import ListView from "../components/ListView";

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.loadNotificationList = this.loadNotificationList.bind(this);
    }

    loadNotificationList() {
        let lst = [
            {
                title: 'Диагноз подтвержден',
                content: 'В.В. Билл подтвердил Ваш диагноз',
                date: new Date().toLocaleDateString(),
                img: 'offline_pin',
                color: 'green'
            },
            {
                title: 'Диагноз подтвержден',
                content: 'В.В. Билл подтвердил Ваш диагноз',
                date: new Date().toLocaleDateString(),
                img: 'offline_pin',
                color: 'green'
            },
            {
                title: 'Диагноз подтвержден',
                content: 'В.В. Билл подтвердил Ваш диагноз',
                date: new Date().toLocaleDateString(),
                img: 'close',
                color: 'red'
            }
        ];
        return lst.map((key, index) => {
            return <NotificationItem item={key} key={index}/>
        })
    }

    render() {
        return (
            <div>
                <TitleBar title={'Уведомления'}/>
                <SecondaryText>Список уведомлений</SecondaryText>
                <LinkOption title={'Показать только непрочитанные'}/>
                <ListView listContent={this.loadNotificationList()} zeroContent={'No notifications yet'}/>
            </div>
        )
    }
}
export default Notifications;