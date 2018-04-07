import React from 'react';

function SecondaryText(props) {
    return (
        <h4 className={'text-secondary'}>
            {props.children}
        </h4>
    )
}

export default SecondaryText