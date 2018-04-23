import React from 'react';

function AlertWrapper(props) {
    let cls = 'alert-' + props.type;
    return (
        <div className={"alert " + cls} role="alert">
            <strong>Ошибка!</strong> {props.children}
        </div>
    )
}

export default AlertWrapper