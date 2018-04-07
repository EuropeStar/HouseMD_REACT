import React from 'react';

function OptionList(props) {
    return (
        <ul className="option-list">
            {props.children}
        </ul>
    )
}

export default OptionList;