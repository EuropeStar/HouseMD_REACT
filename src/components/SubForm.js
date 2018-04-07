import React, {Component} from 'react';
import Field from "./Field";
import DropDownField from "./DropdrownField";

class SubForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{marginBottom: '20px', marginTop: '10px'}}>
                <h4 className={'text-centered'}>{this.props.title}</h4>
                <div className={'hr'} style={{marginBottom: '10px'}}></div>
                {
                    this.props.fieldList.map((key, index) => {
                        switch (key.special) {
                            case undefined:
                                return <Field
                                    key={index}
                                    label={key.label}
                                    type={key.type}
                                    name={key.name}
                                    required={key.required}
                                />;
                            case 'dropdown':
                                return <DropDownField
                                    key={index}
                                    label={key.label}
                                    type={key.type}
                                    name={key.name}
                                    list={key.list}
                                    required={key.required}
                                />
                        }
                    })

                }
            </div>
        )
    }
}

export default SubForm;