import React, {Component} from 'react';

class PhotoThumbnail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={this.props.style}>
                <img id="prof-image" src={this.props.url}/>
            </div>
        )
    }
}

export default PhotoThumbnail;