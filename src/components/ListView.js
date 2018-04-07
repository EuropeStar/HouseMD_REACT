import React, {Component} from 'react';

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listContent: props.listContent || []
        }
    }

    showListContent() {
        if (this.state.listContent.length === 0) {
            return (
                <div className={'text-centered'} style={{color: 'gray'}}>
                    <span className={'material-icons'} style={{fontSize: '50px'}}>warning</span>
                    <h4>{this.props.zeroContent}</h4>
                </div>
            )
        } else {
            return this.state.listContent;
        }
    }


    render() {
        return (
            <div>
                {this.showListContent()}
            </div>
        )
    }
}

export default ListView;