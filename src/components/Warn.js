import React from 'react';

function Warn(props) {
    return (<span style={{color: 'red'}}>
        {props.children}
    </span>)
}

export default Warn