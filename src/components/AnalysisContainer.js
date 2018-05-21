import React from "react";


class AnalysisContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            collected: [],
            len: 0
        }
    }

    collectResult(item) {
        this.setState({collected: this.state.collected.concat(item)}, () => this.props.onChange(this.state.collected))
    }

    render() {
        return (
            <div>
                //ToDo dynamical
            </div>
        )
    }
}