import React, {Component} from 'react';
import TitleBar from "../components/TitleBar";
import SecondaryText from "../components/SecondaryText";
import MaterialCard from "../components/MaterialCard";
import BootstrapTable from 'react-bootstrap-table-next'

const columns = [
    {
        dataField: 'id',
        text: 'ID'
    },
    {
        dataField: 'name',
        text: 'Имя пользователя'
    },
    {
        dataField: 'spec',
        text: 'Специальность'
    },
    {
        dataField: "res_count",
        text: 'Проведено исследований'
    },
    {
        dataField: 'reg_data',
        text: 'Дата регистрации'
    }
];

const data = [
    {
        'id': 1234,
        'name': 'Oleg Olegovich',
        'spec': 'ЛОР',
        'res_count': '2',
        'reg_data': '21.04.2019'
    },
    {
        'id': 1234,
        'name': 'Oleg Olegovich',
        'spec': 'ЛОР',
        'res_count': '2',
        'reg_data': '21.04.2019'
    },
    {
        'id': 1234,
        'name': 'Oleg Olegovich',
        'spec': 'ЛОР',
        'res_count': '2',
        'reg_data': '21.04.2019'
    },
    {
        'id': 1234,
        'name': 'Oleg Olegovich',
        'spec': 'ЛОР',
        'res_count': '2',
        'reg_data': '21.04.2019'
    }
];


class Administrations extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TitleBar title={'Управление докторами'}/>
                <SecondaryText>Управление докторами прикрепленными к вашей поликлиннике</SecondaryText>
                <MaterialCard>
                    <BootstrapTable keyField={'id'} data={data} columns={columns}>

                    </BootstrapTable>
                </MaterialCard>
            </div>
        )
    }
}

export default Administrations;