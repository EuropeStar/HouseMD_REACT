import React, {Component} from 'react';
import MaterialCard from "./MaterialCard";
import NotificationItem from "./NotificationItem";

class NotificationTabBar extends Component {
    constructor(props) {
        super(props);
    }

    fetchAllNotifications() {
        const notes = [
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
        return notes.map((key, index) => {
            return <NotificationItem key={index} item={key}/>
        })
    }

    render() {
        return (
            <div>
                <h2>Уведомления</h2>
                <h4 className={'secondary-text'}>Всего: 3</h4>
                <div>
                {this.fetchAllNotifications()}
                </div>
            </div>
        )
    }
}

export default NotificationTabBar;