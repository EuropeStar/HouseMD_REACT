import React from 'react';

function TitleBar(props) {
    return (
        <div style={{width: 'auto'}}>
            <h2 className={props.className}>{props.title}</h2>
        </div>
    )
}

export default TitleBar