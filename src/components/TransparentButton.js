import React, {Component} from 'react';
import $ from 'jquery'

class TransparentButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let styles = {
            background: 'transparent',
            border: '1px solid transparent',
            cursor: 'pointer',
            color: 'gray'
        };
        if (this.props.mini) {
            styles = $.extend(styles, {
                width: '50px',
                height: '50px',
                fontSize: '6px',
                borderRadius: '6px',
            })
        }
        return (
            <button onClick={this.props.onClick} className={'transparent-btn'} style={styles}><span className={'material-icons'}>{this.props.type}</span>{this.props.title}</button>
        )
    }
}

export default TransparentButton;