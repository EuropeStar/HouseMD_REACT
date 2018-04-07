import React from 'react'

function MaterialCard(props) {
    let classNames = 'card material material-card';
    if (!props.simple) {
        classNames += ' m-form'
    }
    return (
        <div className={classNames} id={props.id}>
            {props.children}
        </div>
    )
}

export default MaterialCard;