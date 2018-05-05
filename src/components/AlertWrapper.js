import React from 'react';

function AlertWrapper(props) {
    let cls = 'alert-' + props.type;
    return (
        <div className={"alert " + cls} role="alert">
            <strong>{props.children}</strong>
        </div>
    )
}

export default AlertWrapper