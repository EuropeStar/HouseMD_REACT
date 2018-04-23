import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class ToolbarIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavLink to={this.props.url}>
                <li><i className="material-icons tb-i">{this.props.type}</i>
                    <p style={{color: 'white'}}>{this.props.title}</p>
                </li>
            </NavLink>
        )
    }
}

export default ToolbarIcon;