import React, {Component} from 'react';
import {Link} from "react-router-dom";

class ToolbarIcon extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link to={this.props.url}>
                <li><i className="material-icons tb-i">{this.props.type}</i>
                    <p style={{color: 'white'}}>{this.props.title}</p>
                </li>
            </Link>
        )
    }
}

export default ToolbarIcon;