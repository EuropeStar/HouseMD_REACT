import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ToolbarLink from "./ToolbarLink";

class ToolbarIcon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'active': props.active
        };
        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        return this.props.clickHandler(this.props.id)
    }

    render() {
        return (
            this.state.active ?
                <ToolbarLink to={this.props.url}>
                <li><i className="material-icons tb-i">{this.props.type}</i>
                    <p>{this.props.title}</p>

                </li></ToolbarLink> :
                <ToolbarLink to={this.props.url}>
                <li><i className="material-icons tb-i">{this.props.type}</i>
                    <p style={{color: 'white'}}>{this.props.title}</p>
                </li>
                </ToolbarLink>
        )
    }
}

export default ToolbarIcon;