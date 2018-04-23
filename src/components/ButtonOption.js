import React, {Component} from "react";
import $ from 'jquery'

class ButtonOption extends Component{
    constructor(props) {
        super(props);
        this.state = {
            'title': this.props.title,
        }
    }

    render() {
        let styles = {};
        if (this.props.color) {
            styles = $.extend(styles, {
                backgroundColor: this.props.color
            })
        }
        let clsNames = 'linear btn m-btn material-btn';
        if (this.props.type) {
            clsNames += ' ' + this.props.type;
        }
        return <button onClick={this.props.handleClick}
                       style={styles}
                       onSubmit={null}
                       className={clsNames}>{this.props.children}{this.state.title}
                       </button>
    }
}

export default ButtonOption;