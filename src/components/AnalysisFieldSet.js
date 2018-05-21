import React from "react";
import Field from "./Field";
import Select from "react-select";
import SecondaryText from "./SecondaryText";



class AnalysisFieldSet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            res: ''
        }
    }

    getSelectorsValues(values) {
        this.setState({value: values}, val => this.props.onChange(this.state));
    }

    onValueChange(event) {
        let v = event.target.value;
        this.setState({res: v}, el =>
            this.props.onChange(this.state));
    }

    findDimension(id) {
        let aId = parseInt(id);
        let res = this.props.analysis.find((value => value.id === aId));
        if (res) {
            return res.dimension || 'N/A'
        } else {
            return 'N/A'
        }
    }

    prepareOptions() {
        return this.props.analysis.reduce((cur, v) => {
            cur.push({value: v.id, label: v.name}); return cur
        }, [])
    }

    render() {
        return (
            <div className={'row'}>
                <div className="col-lg-6">
                    <Select
                        simpleValue={true}
                        options={this.prepareOptions()}
                        onChange={this.getSelectorsValues.bind(this)}
                        value={this.state.value}
                        />
                </div>
                <div className="col-lg-4">
                    <Field onInput={this.onValueChange.bind(this)}/>
                </div>
                <div className="col-lg-2">
                    {this.findDimension(this.state.value)}
                </div>
            </div>
        )
    }

}

export default AnalysisFieldSet;