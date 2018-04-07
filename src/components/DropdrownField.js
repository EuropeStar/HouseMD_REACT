import React, {Component} from 'react';
import $ from 'jquery';

import {DropdownItem, DropdownToggle, ButtonDropdown, DropdownMenu, Button} from 'reactstrap'

class DropDownField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false,
            _val:  this.props.list? this.props.list[0] : ''
        };
        this.toggle = this.toggle.bind(this);
        this.clickEvent = this.clickEvent.bind(this);
    }

    toggle() {
        this.setState({open: !this.state.open})
    }

    clickEvent(e) {
        const inputName = 'input[name="' + this.props.name + '"]';
        $(inputName).val(e.target.innerHTML);
        this.setState({_val: e.target.innerHTML})
    }

    render() {
        return (
            <div>
                <div style={{display: 'block'}}>
                <label className={'form-lbl'} htmlFor={this.props.name}>{this.props.label}</label>
                {this.props.required ? <span style={{color: 'red', fontSize: '20px'}}>*</span> : ''}
                </div>
                <ButtonDropdown isOpen={this.state.open} toggle={this.toggle} style={{backgroundColor: 'transparent !important'}}>
                    <DropdownToggle caret className={'m-drop-btn'}>
                        {this.state._val}
                    </DropdownToggle>
                    <DropdownMenu>
                        <div onClick={this.clickEvent}>
                        {this.props.list.map((key, index) => {
                            return <DropdownItem key={index}>{key} </DropdownItem>
                        })}
                        </div>
                    </DropdownMenu>
                </ButtonDropdown>
                <input name={this.props.name} type={this.props.type || 'text'} placeholder={this.props.placeholder}
                       className='form-control field' value={this.props.value} hidden/>
            </div>
        )
    }
}

export default DropDownField;