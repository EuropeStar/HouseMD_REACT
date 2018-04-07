import React, {Component} from 'react';

class RightSideView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'row'}>
                <div className="col-lg-9 offset-lg-2">
                    <div className={'r-view'}>
                         {this.props.children}
                    </div>
                </div>
        </div>
    )
    }
}

export default RightSideView;