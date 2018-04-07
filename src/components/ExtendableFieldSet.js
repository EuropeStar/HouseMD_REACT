import React, {Component} from 'react';
import SubForm from "./SubForm";
import Field from "./Field";
import TransparentButton from "./TransparentButton";

class ExtendableFieldSet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldsLen: 1
        };
        this.onAddClick = this.onAddClick.bind(this);
        this.onRemoveClick = this.onRemoveClick.bind(this);
    }

    onAddClick(e) {
        this.setState({fieldsLen: this.state.fieldsLen + 1});
        e.preventDefault();
        e.stopPropagation();
    }

    onRemoveClick(e) {
        if (this.state.fieldsLen !== 1)
            this.setState({fieldsLen: this.state.fieldsLen - 1});
        e.preventDefault();
        e.stopPropagation();
    }

    generateFields() {
        let lst = []; // todo make with existing field array
        for (let i = lst.length; i < this.state.fieldsLen; i++) {
            lst.push({
                name: 'symptom' + i
            })
        }
        return lst;
    }

    render() {
        return (
            <div>
                <div style={{marginBottom: '20px', marginTop: '10px'}}>
                    <h4 className={'text-centered'}>{this.props.title}</h4>
                    <div className={'hr'} style={{marginBottom: '10px'}}></div>
                    <div className={'btn-group'}>
                        <TransparentButton onClick={this.onAddClick} type={'add'} mini/>
                        <TransparentButton onClick={this.onRemoveClick} type={'remove'} mini/>
                    </div>
                    <div className={'mt'}></div>
                    {
                        this.generateFields().map((key, index) => {
                            switch (key.special) {
                                case undefined:
                                    return <Field
                                        key={index}
                                        label={key.label}
                                        type={key.type}
                                        name={key.name}
                                        required={key.required}
                                    />;
                            }
                        })

                    }
                </div>
            </div>
        )
    }
}

export default ExtendableFieldSet;