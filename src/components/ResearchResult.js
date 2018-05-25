import React from 'react';
import {Pie} from 'react-chartjs-2'
import ListView from "./ListView";
import DiseaseListItem from "./DiseaseListItem";
import OptionList from "./OptionList";
import ButtonOption from "./ButtonOption";
import MiniIcon from "./MiniIcon";
import TitleBar from "./TitleBar";
import ListDivider from "./ListDivider";
import {Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import Select from "react-select";
import {PATH, URLS} from "../backend";


class ResearchResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            user: null,
            users: []
        }
    }

    componentWillMount() {
        let token = localStorage.getItem('token');
        fetch(PATH + URLS.DOCS, {
            credentials: 'include',
            headers: {
                'Authorization': `JWT ${token}`
            }
        })
            .then(resp => resp.json())
            .then(resp => {
                this.setState({users: resp.map(v => {return {value: v.id, label: v.username}})})
            }).catch(er => console.log(er))
    }

    onChange(item) {
        this.setState({user: item})
    }

    handleClose() {
        this.setState({ modalShow: !this.state.modalShow });
    }

    sendUserNotification() {
        let token = localStorage.getItem('token');
        fetch(PATH + URLS.SEND_NOTIFICATION, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`
            },
            body: JSON.stringify({user_id: this.state.user, ex_id: this.props.ex_id})
        })
            .then(resp => {
                if (resp.status === 200)
                    this.setState({modalShow: false});
                else
                    alert('Error!')
            }).catch(er => console.log(er))
    }

    render() {
        const lbls = this.props.data.map(key => {
            return key.disease.name
        });
        const probs = this.props.data.map(key => {
            return key.prob
        });
        const data = {
            labels: lbls,
            datasets: [{
                data: probs,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56'
                ]
            }]
        };
        const chart = <Pie data={data} width={1} height={1}/>;
        const buildListItems = this.props.data.map((key, index) => {
            return <DiseaseListItem key={index} item={key}/>
        });
        return (
            <div>
                <div>
                <Modal toggle={this.handleClose.bind(this)} isOpen={this.state.modalShow} className={'modal-lg'}>
                    <ModalHeader>
                        Отправить другому доктору
                    </ModalHeader>
                    <ModalBody>
                        <h4>Выберете доктора из списка</h4>
                        <p>Здесь Вы можете отправить исследование на подтверждение другому пользователю системы. Он получит уведомление и сможет ответить на него</p>
                        <Select
                            options={this.state.users}
                            simpleValue={true}
                            value={this.state.user}
                            onChange={this.onChange.bind(this)}
                        />
                    </ModalBody>
                    <ModalFooter>
                        <ButtonOption handleClick={this.sendUserNotification.bind(this)} type={'access'} title={'Отправить'}/>
                        <ButtonOption handleClick={this.handleClose.bind(this)} type={'danger'} title={'Закрыть'}/>
                    </ModalFooter>
                </Modal>
                </div>
                <ListDivider/>
                <TitleBar title={'Результаты исследования'} className={'text-centered'}/>
                <div id={'result-values'}>
                    <div className="row">
                        <div className='col-lg-6'>
                            <ListView listContent={buildListItems}/>
                            <h4 className={'text-centered'}>Описание</h4>
                            <div className={'hr'} style={{marginBottom: '10px'}}></div>
                        </div>
                        <div className='col-lg-3 offset-1'>
                            <div className="row">
                                {chart}
                            </div>
                        </div>
                    </div>
                </div>
                <ListDivider/>

                <OptionList>
                    <ButtonOption type={'error'} handleClick={this.handleClose.bind(this)} title={'Запросить подтверждение'}><MiniIcon
                        type={'reply'}/></ButtonOption>
                    {/*<ButtonOption type={'access'} title={'Распечатать результат'}><MiniIcon*/}
                        {/*type={'print'}/></ButtonOption>*/}
                </OptionList>

            </div>
        )
    }
}

export default ResearchResult;