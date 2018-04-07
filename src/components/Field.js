import React from 'react';

function Field(props) {

    const labelElement = <label htmlFor={props.name} className="form-lbl">
        {props.label} {props.required ? <span style={{color: 'red', fontSize: '20px'} }>*</span> : ''}
    </label>;

    return (
        <div>

            {props.label? labelElement: ''}
            <input name={props.name} type={props.type || 'text'} placeholder={props.placeholder}
                   className='form-control field' value={props.value}/>
        </div>
    )
}

export default Field;