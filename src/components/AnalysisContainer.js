import React from "react";
import AnalysisFieldSet from "./AnalysisFieldSet";
import TransparentButton from "./TransparentButton";


class AnalysisContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            collected: [],
            len: 1
        }
    }

    collectResult(item) {
        if (typeof this.state.collected.find(value => value.value === item.value) !== "undefined") {
            let newColl = [];
            for (let i = 0; i < this.state.collected.length; i++) {
                if (this.state.collected[i].value === item.value) { newColl.push(item) } else { newColl.push(this.state.collected[i]) }
            }
            this.setState({collected: newColl}, () => this.props.onChange(this.state.collected))
        } else {
            if (this.state.len !== this.state.collected.length) {
                this.setState({collected: this.state.collected.concat(item)}, () => this.props.onChange(this.state.collected));
            }
            else {
                let b = this.state.collected;
                b.pop();
                this.setState({collected: b});
                this.collectResult(item)
            }

        }
    }

    onAddClick(e) {
        this.setState({len: this.state.len + 1});
        e.preventDefault();
        e.stopPropagation();
    }

    onRemoveClick(e) {
        if (this.state.len !== 1) {
            let b = this.state.collected;
            b.pop();
            this.setState({len: this.state.len - 1, collected: b});
        }
        e.preventDefault();
        e.stopPropagation();
    }

    createFields() {
        let fields = [];
        for (let i = 0; i < this.state.len; i ++) {
            fields.push(
                <AnalysisFieldSet
                    key={i}
                    onChange={this.collectResult.bind(this)}
                    analysis={this.props.analysis}
                />
            )
        }
        return fields;
    }

    render() {
        return (
            <div>
                <div className={'btn-group'}>
                    <TransparentButton onClick={this.onAddClick.bind(this)} type={'add'} mini/>
                    <TransparentButton onClick={this.onRemoveClick.bind(this)} type={'remove'} mini/>
                </div>
                {this.createFields()}
            </div>
        )
    }
}

export default AnalysisContainer;