import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";

class ToolbarLink extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Route
                path={this.props.to}
                children={({ match }) => (
                    <div className={match ? "active" : ""}>
                        <Link to={this.props.to}>{this.props.children}</Link>
                    </div>
                )}
            />
        );
    }
}

export default ToolbarLink;